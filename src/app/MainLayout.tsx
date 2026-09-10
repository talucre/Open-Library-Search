import { AppShell, Container } from '@mantine/core'
import type { ReactNode } from 'react'
export const MainLayout = ({
    header,
    children,
}: {
    header: ReactNode
    children: ReactNode
}) => {
    return (
        <AppShell header={{ height: 60 }}>
            <AppShell.Header>{header}</AppShell.Header>
            <AppShell.Main>
                <Container py="md">{children}</Container>
            </AppShell.Main>
        </AppShell>
    )
}
