import { useEffect, useState } from "react"

const fakeUser = {
    firstName: "Ginger",
    lastName: "Cat",
}

export function AppMountingUnmountingExample() {
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [text, setText] = useState("")

    function log(entry) {
        // console.log("taco", entry)
        setText((curr) => `${curr}\n${entry}`)
    }

    return (
        <div>
            <button onClick={() => log("parent state changed")}>
                Change parent state
            </button>
            <button onClick={() => setIsSignedIn((curr) => !curr)}>
                Hacky button to toggle isSignedIn
            </button>
            <h3>Welcome to our amazing app!!</h3>
            {isSignedIn && <UserProfile user={fakeUser} log={log} />}
            <textarea
                style={{ position: "absolute", bottom: "1px" }}
                cols={80}
                rows={20}
                value={text}
            ></textarea>
        </div>
    )
}

function UserProfile(props) {
    // const {
    //     log,
    //     user: { firstName, lastName },
    // } = props
    const { log } = props
    const { firstName, lastName } = props.user

    const [counterState, setCounterState] = useState(0)

    useEffect(() => {
        // console.log("hello?")
        log("Child mounted")

        const handle = setInterval(
            () => setCounterState((curr) => ++curr),
            1000
        )

        return () => {
            log("unmounted")
            clearInterval(handle)
        }
    }, [])

    return (
        <div>
            <span>{`Welcome ${firstName} ${lastName}  ${counterState}`}</span>
        </div>
    )
}
