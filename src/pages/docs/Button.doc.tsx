import { useEffect } from "react";
import parse from "html-react-parser";
import { DocLayout } from "src/documentation/components";
import doc from "src/documentation/configs/button.doc.json";

import * as S from "src/pages/styles";
import { Button, ToggleSwitch, FloatingActionButton } from "src/components";

export const ButtonDoc = (): JSX.Element => {
  useEffect(() => {
    document.title = "Button - byoti UI";
  }, []);

  return (
    <DocLayout>
      <S.Section>
        <h2>{doc.title}</h2>
        <p>{doc.description}</p>
      </S.Section>
      {doc.subsection
        .slice(0, -2)
        .map(({ title, description, keywords, examples, code }, index) => (
          <S.Section key={index}>
            {title && <h3>{title}</h3>}
            <p>
              {parse(
                description
                  .split(" ")
                  .map((word: string) =>
                    keywords.includes(word)
                      ? `<span aria-label="component-props">${word}</span>`
                      : word
                  )
                  .join(" ")
              )}
            </p>
            <S.ComponentDisplay>
              {examples.map((prop, index) => (
                <Button {...prop} key={index} />
              ))}
            </S.ComponentDisplay>
            <h4>Usage</h4>
            <S.Code>{parse(code)}</S.Code>
          </S.Section>
        ))}
      {doc.subsection
        .slice(-2, -1)
        .map(({ title, description, keywords, examples, code }, index) => (
          <S.Section key={index}>
            {title && <h3>{title}</h3>}
            <p>
              {parse(
                description
                  .split(" ")
                  .map((word: string) =>
                    keywords.includes(word)
                      ? `<span aria-label="component-props">${word}</span>`
                      : word
                  )
                  .join(" ")
              )}
            </p>
            <S.ComponentDisplay>
              {examples.map((prop, index) => (
                <ToggleSwitch {...prop} key={index} />
              ))}
            </S.ComponentDisplay>
            <h4>Usage</h4>
            <S.Code>{parse(code)}</S.Code>
          </S.Section>
        ))}
      {doc.subsection
        .slice(-1)
        .map(({ title, description, keywords, examples, code }, index) => (
          <S.Section key={index}>
            {title && <h3>{title}</h3>}
            <p>
              {parse(
                description
                  .split(" ")
                  .map((word: string) =>
                    keywords.includes(word)
                      ? `<span aria-label="component-props">${word}</span>`
                      : word
                  )
                  .join(" ")
              )}
            </p>
            <S.ComponentDisplay>
              {examples.map((prop, index) => (
                <FloatingActionButton {...prop} key={index} >X</FloatingActionButton>
              ))}
            </S.ComponentDisplay>
            <h4>Usage</h4>
            <S.Code>{parse(code)}</S.Code>
          </S.Section>
        ))}
    </DocLayout>
  );
};
