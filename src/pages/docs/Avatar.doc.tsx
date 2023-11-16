import { useEffect } from "react";
import parse from "html-react-parser";
import { DocLayout } from "src/documentation/components";
import doc from "src/documentation/configs/avatar.doc.json";

import * as S from "src/pages/styles";
import { Avatar, AvatarSizeType } from "src/components";

export const AvatarDoc = (): JSX.Element => {
  useEffect(() => {
    document.title = "Avatar - byoti UI";
  }, []);

  return (
    <DocLayout>
      <S.Section>
        <h2>{doc.title}</h2>
        <p>{doc.description}</p>
      </S.Section>
      <S.Section>
        {doc.subsection.map(
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
                {examples.map(({ size, ...props }, index) => (
                  <Avatar size={size as AvatarSizeType} {...props} key={index}/>
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
