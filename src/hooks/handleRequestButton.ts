import { Dispatch, SetStateAction } from "react";

export function handleRequestButton(
    username: string,
    setUser: Dispatch<SetStateAction<UserProps>>,
): void {
    fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
        setUser(data)
    })
}