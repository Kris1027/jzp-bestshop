import { Outlet } from "react-router-dom";
import { MainMenu } from "./header/MainMenu";
import { MainContent } from "./header/MainContent";
import { Logo } from "./header/Logo";
import { List } from "./header/List";
import { FlexContainer } from "./FlexContainer";

export function Layout() {
  return (
    <FlexContainer>
      <MainContent>
        <MainMenu />
        <Logo />
        <List />
      </MainContent>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </FlexContainer>
  );
}
