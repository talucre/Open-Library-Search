import { Autocomplete, type AutocompleteProps } from '@mantine/core'
import { useRef } from 'react'

interface Props extends Omit<AutocompleteProps, 'onSubmit'> {
    onSubmit?: (value: string) => void
}

export const Search = ({
    onSubmit,
    value,
    onChange,
    error,
    ...props
}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleOptionSubmit = (value: string) => {
        onSubmit?.(value)
        setTimeout(() => {
            inputRef.current?.blur()
        }, 0)
    }

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                handleOptionSubmit(value || '')
            }}
        >
            <Autocomplete
                ref={inputRef}
                w="100%"
                value={value}
                onChange={onChange}
                onOptionSubmit={handleOptionSubmit}
                {...props}
            />
        </form>
    )
}
