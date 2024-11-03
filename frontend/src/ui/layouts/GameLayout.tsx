import { FC, ReactNode } from "react";

interface PropTypes {
    SideBar: () => ReactNode,
    AppBar: () => ReactNode,
    Content: () => ReactNode
}

const GameLayout: FC<PropTypes> = ({ AppBar, Content, SideBar }) => {
    return (
        <main className="h-screen overflow-hidden bg-stone-700 flex gap-4">
            <aside className="bg-red-200 w-1/6">
                <SideBar />
            </aside>
            <div className="w-full h-full flex flex-col gap-4">
                <header className="bg-green-200 w-full">
                    <AppBar />
                </header>
                <section className="bg-blue-200 w-full flex-1">
                    <Content />
                </section>
            </div>
        </main>
    )
}

export default GameLayout;
