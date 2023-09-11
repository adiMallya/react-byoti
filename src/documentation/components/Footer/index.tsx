import * as S from "./styles";

export const Footer = (): JSX.Element => {
  return (
    <S.FooterContainer>
      <S.FooterHeader>Made with <span>&lt;/&gt;</span> by Adithya Mallya</S.FooterHeader>
      <div aria-label="copyright">© 2022 byoti CSS</div>  
    </S.FooterContainer>
  );
};
