import { SearchBooksLayout } from '@/features/books'
import { SearchBooksPage } from '@/features/books'
import { Route, Routes } from 'react-router'

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<SearchBooksLayout />}>
                <Route index element={<SearchBooksPage />} />
            </Route>
        </Routes>
    )
}
