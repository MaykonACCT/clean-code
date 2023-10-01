interface UserProps {
    name?: string
    login?: string
    bio?: string
    company?: string
    email?: string
    avatar_url?: string
}

interface User {
    getUser: UserProps | undefined
    setUser: Dispatch<SetStateAction<UserProps>>
}