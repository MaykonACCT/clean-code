interface UseParameters {
    isActive?: boolean
    hasIcon?: boolean
    isFontSansSerif?: boolean
    text: string
}

export function useParameters({ 
    isActive = true,
    hasIcon = false,
    isFontSansSerif = true,
    text,
}: UseParameters): UseParameters{
    return {
        isActive,
        hasIcon,
        isFontSansSerif,
        text,
    }
}