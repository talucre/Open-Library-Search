import { BookDetailsPage } from '@/features/books'
import { SearchBooksPage } from '@/features/books'
import { ScrollToTop } from '@/shared/components'
import { Navigate, Route, Routes } from 'react-router'
import { MainLayout } from './MainLayout'

export const AppRouter = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/search" element={<SearchBooksPage />} />
                    <Route path="/book/:id" element={<BookDetailsPage />} />
                    <Route
                        path="*"
                        element={<Navigate to="/search" replace />}
                    />
                </Route>
            </Routes>
        </>
    )
}
