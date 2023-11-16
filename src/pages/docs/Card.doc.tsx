import { useEffect } from "react";
import parse from "html-react-parser";
import { DocLayout } from "src/documentation/components";
import doc from "src/documentation/configs/card.doc.json";

import * as S from "src/pages/styles";
import { Card, CardBody, CardHeader, CardFooter, Text, Heading, Image, Button } from "src/components";

export const CardDoc = (): JSX.Element => {
  useEffect(() => {
    document.title = "Card - byoti UI";
  }, []);

  return (
    <DocLayout>
      <S.Section>
        <h2>{doc.title}</h2>
        <p>{doc.description}</p>
      </S.Section>
        {doc.subsection.slice(0, -2).map(
          ({ title, description, keywords, examples, code }, index) => (
            <S.Section key={index}>
              {title && <h3>{title}</h3>}
              <p>
                {parse(
                  description
                    .split(" ")
                    .map((word) =>
                      keywords.includes(word)
                        ? `<span aria-label="component-props">${word}</span>`
                        : word
                    )
                    .join(" ")
                )}
              </p>
              <S.ComponentDisplay column="true">
                {examples.map(({ content, color, ...props }) => (
                    <Card {...props}>
                      <CardBody>
                        <Text color={color} fontWeight={600}>{content}</Text>
                      </CardBody>
                    </Card>
                ))}
              </S.ComponentDisplay>
              <h4>Usage</h4>
              <S.Code>{parse(code)}</S.Code>
            </S.Section>
          )
        )}
        {doc.subsection.slice(-2, -1).map(
          ({ title, description, keywords, examples, code }, index) => (
            <S.Section key={index}>
              {title && <h3>{title}</h3>}
              <p>
                {parse(
                  description
                    .split(" ")
                    .map((word) =>
                      keywords.includes(word)
                        ? `<span aria-label="component-props">${word}</span>`
                        : word
                    )
                    .join(" ")
                )}
              </p>
              <S.ComponentDisplay column="true">
                {examples.map(({ src, heading, content, price }) => (
                    <Card maxw={30}>
                      <Image src={src} alt="Red sports shoes" />
                      <CardBody spacing={1}>
                        <Heading size="sm">{heading}</Heading>
                        <Text>{content}</Text>
                        <Text color="#075985" fontWeight={600} fontSize="xl">{price}</Text> 
                      </CardBody>
                      <CardFooter spacing={1}>
                        <Button size="lg" type="button" label="Buy Now" color="#075985"/>
                        <Button size="lg" variant="outline" type="button" label="Add to Cart" color="#075985"/>
                      </CardFooter>
                    </Card>
                ))}
              </S.ComponentDisplay>
              <h4>Usage</h4>
              <S.Code>{parse(code)}</S.Code>
            </S.Section>
          )
        )}
        {doc.subsection.slice(-1).map(
          ({ title, description, keywords, examples, code }, index) => (
            <S.Section key={index}>
              {title && <h3>{title}</h3>}
              <p>
                {parse(
                  description
                    .split(" ")
                    .map((word) =>
                      keywords.includes(word)
                        ? `<span aria-label="component-props">${word}</span>`
                        : word
                    )
                    .join(" ")
                )}
              </p>
              <S.ComponentDisplay column="true">
                {examples.map(({ src, heading, content, price }) => (
                    <Card direction={"row"} spacing={2}>
                      <Image src={src} alt="Skin care kit by beyou" boxSize={200}/>
                      <div>
                        <CardBody spacing={1}>
                          <Heading size="sm">{heading}</Heading>
                          <Text>{content}</Text>
                          <Text color="#075985" fontWeight={600} fontSize="xl">{price}</Text> 
                        </CardBody>
                        <CardFooter spacing={1}>
                          <Button size="lg" type="button" label="Buy Now" color="#075985"/>
                          <Button size="lg" variant="outline" type="button" label="Add to Cart" color="#075985"/>
                        </CardFooter>
                      </div>
                    </Card>
                ))}
              </S.ComponentDisplay>
              <h4>Usage</h4>
              <S.Code>{parse(code)}</S.Code>
            </S.Section>
          )
        )}
    </DocLayout>
  );
};
