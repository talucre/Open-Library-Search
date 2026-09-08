import { AppShell, Container, Stack } from '@mantine/core'
import { Outlet } from 'react-router'
import { Search } from '@/shared/components/Search'
import { useSearchStore } from '../../model/searchStore'

export const SearchBooksLayout = () => {
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
        <AppShell padding="md" header={{ height: 60 }}>
            <AppShell.Header>
                <Container size="sm" h="100%">
                    <Stack justify="center" h="100%">
                        <Search
                            value={query}
                            onChange={setQuery}
                            data={suggestions}
                            error={error}
                            onSubmit={handleSubmit}
                            onClear={reset}
                        />
                    </Stack>
                </Container>
            </AppShell.Header>
            <AppShell.Main>
                <Container>
                    <Outlet />
                </Container>
            </AppShell.Main>
        </AppShell>
    )
}
