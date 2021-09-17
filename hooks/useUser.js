import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import { changesAuthStates } from "../firebase/client"

export const USER_STATES = {
    NOT_LOGGED: null,
    NOT_KNOWN: undefined,
}

export default function useUser() {
    const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
    const router = useRouter();

    useEffect(() => {
        changesAuthStates(setUser)
    }, [])

    useEffect(() => {
        user === USER_STATES.NOT_LOGGED && router.push("/login")
    }, [user])

    return user
}
