import { BooksSearchBar } from '@/features/books'
import { BackButtonHeader } from '@/shared/components/BackButtonHeader'
import { AppShell, Container } from '@mantine/core'
import { Outlet, useLocation } from 'react-router'

export const MainLayout = () => {
    const { pathname } = useLocation()

    const isSearch = pathname === '/search'

    return (
        <AppShell header={{ height: 60 }}>
            <AppShell.Header>
                {isSearch && <BooksSearchBar />}
                {!isSearch && <BackButtonHeader />}
            </AppShell.Header>
            <AppShell.Main>
                <Container py="md">
                    <Outlet />
                </Container>
            </AppShell.Main>
        </AppShell>
    )
}
