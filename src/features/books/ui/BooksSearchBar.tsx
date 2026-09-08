import { Search } from '@/shared/components'
import { Container, Stack } from '@mantine/core'
import { useSearchStore } from '../model/searchStore'

export const BooksSearchBar = () => {
    const {
        query,
        suggestions,
        setQuery,
        error,
        setSubmittedQuery,
        setError,
        reset,
    } = useSearchStore()

    const handleSubmit = (value: string) => {
        if (value.trim().length < 3) {
            setError('Введите не меньше 3 символов')
            return
        }
        setSubmittedQuery(value)
    }

    return (
        <Container size="sm" h="100%">
            <Stack justify="center" h="100%">
                <Search
                    value={query}
                    onChange={setQuery}
                    placeholder="Type in to search a book"
                    data={suggestions}
                    error={error}
                    onSubmit={handleSubmit}
                    onClear={reset}
                    clearable
                />
            </Stack>
        </Container>
    )
}
