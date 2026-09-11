import { Image, Skeleton } from '@mantine/core'
import { Carousel } from '@mantine/carousel'

export const BookCoverCarousel = ({ covers }: { covers?: number[] }) => {
    return (
        <>
            {!covers && <Skeleton w="100%" h="450" />}
            {covers && (
                <Carousel h="450" withControls withIndicators>
                    {covers?.length &&
                        covers.map(c => (
                            <Carousel.Slide key={c}>
                                <Image
                                    w="100%"
                                    h="450"
                                    src={`https://covers.openlibrary.org/b/id/${c}-L.jpg`}
                                />
                            </Carousel.Slide>
                        ))}
                </Carousel>
            )}
        </>
    )
}
