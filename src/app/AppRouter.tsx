import { BookDetailsPage, BooksSearchBar } from '@/features/books'
import { SearchBooksPage } from '@/features/books'
import { BackButtonHeader, ScrollToTop } from '@/shared/components'
import { Navigate, Route, Routes } from 'react-router'
import { MainLayout } from './MainLayout'

export const AppRouter = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route
                    path="/search"
                    element={
                        <MainLayout header={<BooksSearchBar />}>
                            <SearchBooksPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/book/:id"
                    element={
                        <MainLayout header={<BackButtonHeader />}>
                            <BookDetailsPage />
                        </MainLayout>
                    }
                />
                <Route path="*" element={<Navigate to="/search" replace />} />
            </Routes>
        </>
    )
}
