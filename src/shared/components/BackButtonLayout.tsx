import { ActionIcon, AppShell, Container, Group } from '@mantine/core'
import { ArrowLeftIcon } from '@phosphor-icons/react'
import { Outlet, useNavigate } from 'react-router'

export const BackButtonLayout = () => {
    const navigate = useNavigate()

    return (
        <AppShell p="md" header={{ height: 60 }}>
            <AppShell.Header>
                <Container h="100%">
                    <Group h="100%" align="center" justify="space-between">
                        <ActionIcon
                            onClick={() => navigate(-1)}
                            variant="default"
                            radius="xl"
                            size="lg"
                        >
                            <ArrowLeftIcon size={24} />
                        </ActionIcon>
                    </Group>
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
