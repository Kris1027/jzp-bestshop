import { Outlet } from "react-router-dom";
import { MainMenu } from "./header/MainMenu";
import { Logo } from "./header/Logo";
import { FlexContainer } from "./FlexContainer";
import { IconList } from "./header/IconList";
import { Footer } from "./footer/Footer";

export function Layout() {
  return (
    <>
      <FlexContainer>
        <MainMenu />
        <Logo />
        <IconList />
      </FlexContainer>
      <FlexContainer>
        <Outlet />
      </FlexContainer>
      <Footer />
    </>
  );
}
