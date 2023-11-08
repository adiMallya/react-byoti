import { useEffect } from "react";
import parse from "html-react-parser";
import { DocLayout } from "src/documentation/components";
import doc from "src/documentation/configs/badge.doc.json";

import * as S from "src/pages/styles";
import { Avatar, Badge, AvatarBadge } from "src/components";

export const BadgeDoc = (): JSX.Element => {
  useEffect(() => {
    document.title = "Badge - byoti UI";
  }, []);

  return (
    <DocLayout>
      <S.Section>
        <h2>{doc.title}</h2>
        <p>{doc.description}</p>
      </S.Section>
      <S.Section>
        {doc.subsection
          .slice(0, -1)
          .map(({ title, description, keywords, examples, code }) => (
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
                {examples.map(({ text, ...props }, index) => (
                  <Badge {...props} key={index}>
                    {text}
                  </Badge>
                ))}
              </S.ComponentDisplay>
              <h4>Usage</h4>
              <S.Code>{parse(code)}</S.Code>
            </>
          ))}
      </S.Section>
      <S.Section>
        {doc.subsection
          .slice(-1)
          .map(({ title, description, keywords, examples, code }) => (
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
                {examples.map(({ status, size, color, ...props }, index) => (
                  <Avatar {...props} key={index} size={size}>
                    <AvatarBadge status={status} size={size} color={color} />
                  </Avatar>
                ))}
              </S.ComponentDisplay>
              <h4>Usage</h4>
              <S.Code>{parse(code)}</S.Code>
            </>
          ))}
      </S.Section>
    </DocLayout>
  );
};
