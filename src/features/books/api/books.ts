import type { OpenLibrarySearchResponse } from '../model/types'

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
