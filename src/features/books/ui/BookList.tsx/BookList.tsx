import { SimpleGrid, Text } from '@mantine/core'
import type { BookSearch } from '../../model/types'
import { useLayoutEffect } from 'react'
import { BookCard } from '../BookCard/BookCard'
import { BookListSkeleton } from './BookListSkeleton'

interface Props {
    books: BookSearch[]
    isLoading: boolean
    isFetchingNextPage: boolean
}

export const BooksList = ({ books, isLoading, isFetchingNextPage }: Props) => {
    useLayoutEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isLoading])

    if (isLoading) {
        return (
            <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }}>
                <BookListSkeleton />
            </SimpleGrid>
        )
    }

    if (books.length === 0) {
        return <Text>По вашему запросу ничего не найдено</Text>
    }

    return (
        <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }}>
            {books.map(book => (
                <BookCard book={book} key={book.key} />
            ))}
            {isFetchingNextPage && <BookListSkeleton size={8} />}
        </SimpleGrid>
    )
}
