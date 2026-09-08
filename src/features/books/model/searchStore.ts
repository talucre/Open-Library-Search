import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SearchState {
    query: string
    submittedQuery: string
    suggestions: string[]
    error: string | null
    setQuery: (query: string) => void
    setSubmittedQuery: (query: string) => void
    setError: (error: string | null) => void
    reset: () => void
}

export const useSearchStore = create<SearchState>()(
    persist(
        set => ({
            query: '',
            submittedQuery: '',
            suggestions: [],
            error: null,
            setQuery: query => set({ query, error: null }),
            setSubmittedQuery: submittedQuery =>
                set(state => {
                    const filtered = state.suggestions.filter(
                        s => s.toLowerCase() !== submittedQuery.toLowerCase(),
                    )
                    const newSuggestions = [submittedQuery, ...filtered].slice(
                        0,
                        5,
                    )

                    return {
                        submittedQuery,
                        suggestions: newSuggestions,
                    }
                }),
            setError: error => set({ error }),
            reset: () => set({ query: '', submittedQuery: '', error: null }),
        }),
        {
            name: 'search-suggestions',
            partialize: state => ({
                suggestions: state.suggestions,
            }),
        },
    ),
)
