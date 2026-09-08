import { BookDetailsPage, SearchBooksLayout } from '@/features/books'
import { SearchBooksPage } from '@/features/books'
import { BackButtonLayout, ScrollToTop } from '@/shared/components'
import { Route, Routes } from 'react-router'

export const AppRouter = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route element={<SearchBooksLayout />}>
                    <Route index element={<SearchBooksPage />} />
                </Route>
                <Route element={<BackButtonLayout />}>
                    <Route path="/book/:id" element={<BookDetailsPage />} />
                </Route>
            </Routes>
        </>
    )
}
