import {
    useQuery,
    useQueryClient,
    type InfiniteData,
} from '@tanstack/react-query'
import type { OLWorkResponse, OpenLibrarySearchResponse } from '../model/types'
import { useMemo } from 'react'

export const searchBooks = async (
    searchQuery: string,
    offset: number,
): Promise<OpenLibrarySearchResponse> => {
    const res = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}&offset=${offset}&limit=12`,
    )

    if (!res.ok) {
        throw new Error('Failed to search books')
    }

    return res.json()
}

export const fetchBookById = async (id: string): Promise<OLWorkResponse> => {
    const res = await fetch(`https://openlibrary.org/works/${id}.json`)

    if (!res.ok) {
        throw new Error('Failed to find the book')
    }

    return res.json()
}

export const useGetBookById = (id: string) => {
    const { data, isLoading, error, ...rest } = useQuery({
        queryKey: ['bookDetails', id],
        queryFn: () => fetchBookById(id),
        staleTime: 1000 * 60 * 5,
    })

    const queryClient = useQueryClient()

    type EnrichedOLWorkResponse = OLWorkResponse & { author_name?: string }

    const enrichData: EnrichedOLWorkResponse | undefined = useMemo(() => {
        if (!data) return

        const cachedData = queryClient.getQueriesData({
            queryKey: ['searchBooks'],
        })

        const books = cachedData
            .flatMap(el => el[1]) // превращем массив [queryKey, value] в value
            .filter(Boolean) // очищаем undefined
            .map(el => el as { pages: OpenLibrarySearchResponse[] }) // доходим до того, что хранит useInfiniteQuery
            .flatMap(el => el.pages) // забираем страницы
            .flatMap(el => el.docs) // забираем книги

        const fetchedBookKey = data.authors?.[0].author.key
        const processedKey = fetchedBookKey?.slice(
            fetchedBookKey.lastIndexOf('/') + 1,
        )

        if (processedKey) {
            const foundBook = books.find(
                b => b.author_key?.[0] === processedKey,
            )
            return {
                ...data,
                author_name: foundBook?.author_name?.[0] || undefined,
            }
        }

        return {
            ...data,
            author_name: undefined,
        }
    }, [data, queryClient])

    return {
        data: enrichData,
        isLoading,
        error,
        ...rest,
    }
}
