import { useEffect, useRef, useState } from "react"

const initialTaskList = ["buy ginger some food", "get a haircut", "call mom"]

export const AppInputUncontrolled = () => {
    const inputRef = useRef()

    const [list, setList] = useState(initialTaskList)

    const tasks = list.map((el) => <TaskItem>{el}</TaskItem>)

    const handleClick = () => {
        if (!inputRef.current.value || !inputRef.current.value.trim()) {
            return
        }

        setList((currentList) => {
            const collection = new Set([...currentList, inputRef.current.value])
            return [...collection]
        })
    }

    console.log("use effect fired", list)

    useEffect(() => {
        inputRef.current.value = ""

        console.log("use effect fired", list)

        if (list.length >= 5) {
            console.warn("list is >= 5")
        }
    }, [list])

    return (
        <div className="App">
            <h1>APP - uncontrolled input</h1>
            {tasks}
            <input ref={inputRef} type="text"></input>
            <button onClick={handleClick}>Add new task</button>
        </div>
    )
}

export function TaskItem(props) {
    return <div>{props.children}</div>
}
