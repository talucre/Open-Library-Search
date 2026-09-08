import type { BookSearch } from '@/features/books/model/types'
import { Card, Text } from '@mantine/core'
import { BookCover } from './BookCover'
import { BookDescription } from './BookDescription'

interface Props {
    book: BookSearch
}

export const BookCard = ({ book }: Props) => {
    return (
        <Card shadow="sm" withBorder>
            <Card.Section>
                <BookCover coverKey={book.cover_edition_key} />
            </Card.Section>
            <Card.Section p="xs">
                <BookDescription book={book} />
            </Card.Section>
        </Card>
    )
}
