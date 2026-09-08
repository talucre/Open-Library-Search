export const mapLanguages = (languages?: string[]) => {
    if (!languages || languages.length == 0) {
        return null
    }

    if (languages.length <= 4) {
        return languages
    }

    const rest = languages.length - 3

    return [...languages.slice(0, 3), `+${rest}`]
}
