import { useEffect } from "react";
import parse from "html-react-parser";
import { DocLayout } from "src/documentation/components";
import doc from "src/documentation/configs/image.doc.json";

import * as S from "src/pages/styles";
import { Image } from "src/components";

export const ImageDoc = (): JSX.Element => {
  useEffect(() => {
    document.title = "Image - byoti UI";
  }, []);

  return (
    <DocLayout>
      <S.Section>
        <h2>{doc.title}</h2>
        <p>{doc.description}</p>
      </S.Section>
      <S.Section>
        {doc.subsection.slice(0,-1).map(
          ({ title, description, keywords, examples, code }) => (
            <>
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
              <S.ComponentDisplay>
                {examples.map((props) => (
                    <Image {...props} />
                ))}
              </S.ComponentDisplay>
              <h4>Usage</h4>
              <S.Code>{parse(code)}</S.Code>
            </>
          )
        )}
      </S.Section>
      <S.Section>
        {doc.subsection.slice(-1).map(
          ({ title, description, keywords, examples, code }) => (
            <>
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
              <S.ComponentDisplay column>
                {examples.map((props) => (
                    <Image {...props} />
                ))}
              </S.ComponentDisplay>
              <h4>Usage</h4>
              <S.Code>{parse(code)}</S.Code>
            </>
          )
        )}
      </S.Section>
    </DocLayout>
  );
};
