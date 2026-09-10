import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import { Providers } from './Providers'
import { AppRouter } from './AppRouter'

export const App = () => {
    return (
        <Providers>
            <AppRouter />
        </Providers>
    )
}
