import { Outlet } from "react-router-dom";
import { MainMenu } from "./header/MainMenu";
import { Logo } from "./header/Logo";
import { IconList } from "./header/IconList";
import { Footer } from "./footer/Footer";
import { CategoryMenu } from "./header/CategoryMenu";
import { MainContent } from "./header/MainContent";
import { Wrapper } from "./Wrapper";

export function Layout() {
  return (
    <Wrapper>
      <MainContent>
        <MainMenu />
        <Logo />
        <IconList />
      </MainContent>
      <CategoryMenu />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}
