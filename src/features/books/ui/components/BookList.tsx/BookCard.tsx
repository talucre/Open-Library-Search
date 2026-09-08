import type { BookSearch } from '@/features/books/model/types'
import { Card, Text } from '@mantine/core'

interface Props {
    book: BookSearch
}

export const BookCard = ({ book }: Props) => {
    return (
        <Card shadow="sm" withBorder>
            <Text>{book.title}</Text>
        </Card>
    )
}
