import type { BookSearch } from '../../model/types'
import { Button, Card } from '@mantine/core'
import { BookCover } from './BookCover'
import { BookDescription } from './BookDescription'
import { Link } from 'react-router'

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
            <Card.Section mt="auto" p="xs">
                <Link to={`/book/${book.key.slice(6)}`}>
                    <Button w="100%">Узнать больше</Button>
                </Link>
            </Card.Section>
        </Card>
    )
}
