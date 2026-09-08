import { Image, Skeleton } from '@mantine/core'

interface Props {
    coverKey?: string
}

export const BookCover = ({ coverKey }: Props) => {
    const src = coverKey
        ? `https://covers.openlibrary.org/b/olid/${coverKey}-M.jpg`
        : null

    return (
        <>
            {src ? (
                <Image height="270" alt="Book cover" src={src} />
            ) : (
                <Skeleton height="270" animate={false} />
            )}
        </>
    )
}
