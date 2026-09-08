import { Skeleton } from '@mantine/core'

export const BookListSkeleton = ({ size = 20 }: { size?: number }) => {
    return (
        <>
            {Array(size)
                .fill(0)
                .map((_, index) => (
                    <Skeleton key={index} height="450px" />
                ))}
        </>
    )
}
