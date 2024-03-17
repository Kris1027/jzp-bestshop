import { Outlet } from "react-router-dom";
import { MainMenu } from "./header/MainMenu";
import { MainContent } from "./header/MainContent";
import { Logo } from "./header/Logo";
import { FlexContainer } from "./FlexContainer";
import { IconList } from "./header/IconList";

export function Layout() {
  return (
    <FlexContainer>
      <MainContent>
        <MainMenu />
        <Logo />
        <IconList />
      </MainContent>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </FlexContainer>
  );
}
