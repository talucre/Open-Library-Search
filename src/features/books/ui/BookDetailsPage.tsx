import { useParams } from 'react-router'
import { useGetBookById } from '../api/books'
import {
    Center,
    Grid,
    Skeleton,
    Text,
    Image,
    Group,
    Title,
    Stack,
} from '@mantine/core'
import { Carousel } from '@mantine/carousel'

export const BookDetailsPage = () => {
    const { id } = useParams<{ id: string }>()
    const { data, isLoading, isError } = useGetBookById(id!)

    console.log(data)

    if (isError) {
        return (
            <Center h="100%">
                <Text>Произошла ошибка при поиске информации о книге</Text>
            </Center>
        )
    }

    if (isLoading) {
        return (
            <Grid>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Skeleton h={450} />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Skeleton h="var(--mantine-h1-font-size)" />
                </Grid.Col>
            </Grid>
        )
    }

    return (
        <Grid gap="xs">
            <Grid.Col span={{ base: 12, sm: 6 }}>
                <Center>
                    <Carousel h="450" withControls withIndicators>
                        {data?.covers?.map(c => (
                            <Carousel.Slide key={c}>
                                <Image
                                    w="100%"
                                    h="450"
                                    src={`https://covers.openlibrary.org/b/id/${c}-L.jpg`}
                                />
                            </Carousel.Slide>
                        ))}
                    </Carousel>
                </Center>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
                <Stack>
                    <Title>{data?.title}</Title>
                    <Group justify="space-between">
                        <Text c="dimmed">{data?.first_publish_date}</Text>
                        <Text>{data?.author_name}</Text>
                    </Group>
                    <Group></Group>
                </Stack>
            </Grid.Col>
            <Grid.Col span={12}>
                <Text style={{ textIndent: '2em' }}>
                    {data?.description?.value}
                </Text>
            </Grid.Col>
        </Grid>
    )
}
