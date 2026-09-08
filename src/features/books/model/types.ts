export interface BookSearch {
    author_key?: string[]
    author_name?: string[]
    cover_edition_key?: string
    cover_i?: number
    ebook_access?: 'printdisabled' | 'borrowable' | 'public' | string
    edition_count: number
    first_publish_year?: number
    has_fulltext: boolean
    ia?: string[]
    ia_collection?: string[]
    key: string
    language?: string[]
    public_scan_b: boolean
    title: string
}

export interface OpenLibrarySearchResponse {
    numFound: number
    start: number
    numFoundExact: boolean
    num_found: number
    documentation_url: string
    q: string
    offset: number
    docs: BookSearch[]
}
