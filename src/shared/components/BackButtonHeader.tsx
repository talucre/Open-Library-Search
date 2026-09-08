import { ActionIcon, Container, Group } from '@mantine/core'
import { ArrowLeftIcon } from '@phosphor-icons/react'
import { useNavigate } from 'react-router'

export const BackButtonHeader = () => {
    const navigate = useNavigate()

    return (
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
    )
}
