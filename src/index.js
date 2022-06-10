import React from "react"
import ReactDOM from "react-dom/client"
import { AppInputUncontrolled } from "./AppInputUncontrolled"
import { AppInputControlled } from "./AppInputControlled"
import { AppMountingUnmountingExample } from "./AppMountingUnmountingExample"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        {/* <AppInputUncontrolled /> */}
        {/* <AppInputControlled /> */}
        <AppMountingUnmountingExample />
    </React.StrictMode>
)
