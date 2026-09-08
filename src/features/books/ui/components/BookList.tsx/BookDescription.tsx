import { Stack, Text, Group, Badge } from '@mantine/core'
import type { BookSearch } from '../../../model/types'
import { mapLanguages } from '../../../util/mapLanguages'

interface Props {
    book: BookSearch
}

export const BookDescription = ({ book }: Props) => {
    return (
        <Stack gap={4}>
            <Text fw={500}>{book.title}</Text>
            {book?.author_name?.[0] && (
                <Text size="sm">{book.author_name[0]}</Text>
            )}
            <Group gap={4}>
                {mapLanguages(book.language)?.map(l => (
                    <Badge color="black" size="sm" key={l}>
                        {l}
                    </Badge>
                ))}
            </Group>
            <Text size="sm" color="gray">
                {book.first_publish_year}
            </Text>
        </Stack>
    )
}
