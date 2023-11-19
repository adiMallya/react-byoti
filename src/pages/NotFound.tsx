import { useEffect } from "react";
import { MainContent } from "src/documentation/components/DocLayout/styles";
import * as S from "./styles";
import { Heading, Text, Button } from "src/components";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404: Not found - byoti UI";
  }, []);

  return (
    <>
      <MainContent>
        <S.HomeSection center="true">
          <div>
            <Heading size="xl">404 | Page Not Found</Heading>
            <Text fontSize="lg">You just hit a route that doesn't exist...</Text>
            <Button size="lg" onClick={() => navigate("/")} color="#BE185D">Back to Home</Button>
          </div>
        </S.HomeSection>
      </MainContent>
    </>
  );
};
