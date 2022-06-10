import { useEffect, useRef, useState } from "react"

const initialTaskList = ["buy ginger some food", "get a haircut", "call mom"]

export const AppInputControlled = () => {
    const [inputValue, setInputValue] = useState("")
    const [list, setList] = useState(initialTaskList)

    const tasks = list.map((el) => <TaskItem>{el}</TaskItem>)

    const handleClick = () => {
        if (!inputValue || !inputValue.trim()) {
            return
        }

        setList((currentList) => {
            const collection = new Set([...currentList, inputValue])
            return [...collection]
        })

        setInputValue("")
    }

    // console.log("use effect fired", list)

    useEffect(() => {
        console.log("use effect fired", list)

        if (list.length >= 5) {
            console.log("warning, list is >= 5")
        }
    }, [])

    return (
        <div className="App">
            <h3>APP - CONTROLLED input</h3>
            {tasks}
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
            ></input>
            <button onClick={handleClick}>Add new task</button>
        </div>
    )
}

export function TaskItem(props) {
    return <div>{props.children}</div>
}
