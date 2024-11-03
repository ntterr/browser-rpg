import { FC } from "react"
import { GameLayout } from "./ui/layouts"

const App: FC = () => {
    return (
        <GameLayout SideBar={() => <></>} AppBar={() => <></>} Content={() => <></>} />
    )
}

export default App
