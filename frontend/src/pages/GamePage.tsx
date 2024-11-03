import { FC } from "react";
import { GameLayout } from "../ui/layouts";
import { AppBar, SkillsBar } from "../features";

const GamePage: FC = () => {
    return <GameLayout
        AppBar={() => <AppBar />}
        SideBar={() => <SkillsBar />}
        Content={() => <>Content</>}
    />
}

export default GamePage;
