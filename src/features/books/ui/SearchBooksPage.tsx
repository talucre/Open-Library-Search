import { Button, Center, Stack, Text } from '@mantine/core'
import { useSearchStore } from '../model/searchStore'
import { useInfiniteQuery } from '@tanstack/react-query'
import { searchBooks } from '../api/books'
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll'
import { BooksList } from './BookList.tsx/BookList'

export const SearchBooksPage = () => {
    const submittedQuery = useSearchStore(state => state.submittedQuery)

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        refetch,
    } = useInfiniteQuery({
        queryKey: ['books', submittedQuery],
        queryFn: ({ pageParam }) => searchBooks(submittedQuery, pageParam),
        initialPageParam: 0,
        getNextPageParam: lastPage => {
            const offset =
                lastPage.offset + 12 < lastPage.num_found
                    ? lastPage.offset + 12
                    : null
            return offset
        },
        enabled: submittedQuery.trim().length >= 3,
        staleTime: 1000 * 60 * 5,
    })

    const { observerRef } = useInfiniteScroll({
        fetchNextPage,
        hasNextPage,
        isFetching: isFetchingNextPage,
    })

    if (!submittedQuery) {
        return (
            <Center h="50dvh">
                <Text color="dimmed" ta="center">
                    Введите название книги для начала поиска
                </Text>
            </Center>
        )
    }

    const pages = data?.pages.flatMap(res => res.docs) || []

    return (
        <Stack h="100%" gap="md">
            {isError && (
                <Center h="50dvh" flex={1}>
                    <Stack>
                        <Text ta="center">
                            Произошла ошибка при загрузке книг
                        </Text>
                        <Button onClick={() => refetch()}>
                            Попробовать снова?
                        </Button>
                    </Stack>
                </Center>
            )}

            {!isError && (
                <BooksList
                    books={pages}
                    isLoading={isLoading}
                    isFetchingNextPage={isFetchingNextPage}
                />
            )}

            {hasNextPage && !isLoading && (
                <div ref={observerRef} style={{ height: '20px' }} />
            )}
        </Stack>
    )
}
