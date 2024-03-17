import { Outlet } from "react-router-dom";
import { MainMenu } from "./header/MainMenu";
import { Logo } from "./header/Logo";
import { IconList } from "./header/IconList";
import { Footer } from "./footer/Footer";
import { CategoryMenu } from "./header/CategoryMenu";
import { Wrapper } from "./Wrapper";
import { MainContent } from "./header/MainContent";

export function Layout() {
  return (
    <>
      <Wrapper>
        <MainContent>
          <MainMenu />
          <Logo />
          <IconList />
        </MainContent>
      </Wrapper>
      <CategoryMenu />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
}
