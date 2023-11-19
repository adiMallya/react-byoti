import { useEffect } from "react";
import { MainContent } from "src/documentation/components/DocLayout/styles";
import { Navbar, Footer } from "src/documentation/components";
import * as S from "./styles";
import { Heading, Text, Button, Image } from "src/components";
import hero from "src/assets/hero_banner.svg";
import { useNavigate } from "react-router-dom";

export const Home = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "byoti UI";
  }, []);

  return (
    <>
      <Navbar />
      <MainContent>
        <S.HomeSection>
          <S.Section>
            <Heading size="xl">Create byoti<i>ful</i> React apps faster</Heading>
            <Text fontSize="lg" fontWeight={400}>
              byoti UI provides simple and accessible building blocks to build your React applications.
            </Text>
            <div style={{"display": "flex" ,"gap": "1rem"}}>
              <Button size="md" variant="outline" color="#BE185D" label="Get Started" onClick={() => navigate('/docs/alert')} />
              {/* <Button as="a" size="md" variant="solid" color="#BE185D" label="Documentation" href="/docs/alert"/> */}
            </div>
          </S.Section>
          <S.Section style={{"padding": "1rem"}}>
            <Image src={hero} alt="Hero Image" />
          </S.Section>
        </S.HomeSection>
      </MainContent>
      <Footer />
    </>
  );
};
