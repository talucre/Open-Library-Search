import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 0,
        },
    },
})

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <MantineProvider>{children}</MantineProvider>
            </QueryClientProvider>
        </BrowserRouter>
    )
}
