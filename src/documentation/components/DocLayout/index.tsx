import { ReactNode } from "react";
import { Navbar, Menu, Footer } from "..";
import * as S from "./styles";

export const DocLayout = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <S.PageLayout>
      <Navbar />
      <Menu />
      <S.MainContent>{children}</S.MainContent>
      <Footer />
    </S.PageLayout>
  );
};
