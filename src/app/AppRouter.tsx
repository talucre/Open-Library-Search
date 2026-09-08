import { SearchBooksLayout } from '@/features/books/ui/components/SearchBooksLayout'
import { SearchBooksPage } from '@/features/books/ui/SearchBooksPage'
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
