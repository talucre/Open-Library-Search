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

export interface OLTypeRef {
    key: string
}

export interface OLValueWithByWithType<T = string> {
    type: string
    value: T
}

export interface OLDescription {
    type: string
    value: string
}

export interface OLAuthorLink {
    author: OLTypeRef
    type: OLTypeRef
}

export interface OLLink {
    title: string
    url: string
    type: OLTypeRef
}

export interface OLIdentifiers {
    wikidata?: string[]
    bookbrainz?: string[]
    librarything?: string[]
    goodreads?: string[]
    musicbrainz?: string[]
    [key: string]: string[] | undefined // На случай других идентификаторов
}

export interface OLWorkResponse {
    key: string
    title: string
    type: OLTypeRef
    description?: string | OLDescription
    covers?: number[]
    subjects?: string[]
    subject_people?: string[]
    subject_places?: string[]
    first_publish_date?: string
    authors?: OLAuthorLink[]
    links?: OLLink[]
    identifiers?: OLIdentifiers
    genres?: string[]
    latest_revision: number
    revision: number
    created: OLValueWithByWithType<string>
    last_modified: OLValueWithByWithType<string>
}
