import { useEffect } from "react";
import parse from "html-react-parser";
import { DocLayout } from "src/documentation/components";
import doc from "src/documentation/configs/alert.doc.json";

import * as S from "src/pages/styles";
import { Alert } from "src/components";

export const AlertDoc = (): JSX.Element => {
  useEffect(() => {
    document.title = "Alert - byoti UI";
  }, []);

  return (
    <DocLayout>
      <S.Section>
        <h2>{doc.title}</h2>
        <p>{doc.description}</p>
      </S.Section>
      <S.Section>
        {doc.subsection.map(({ title, description, keywords, examples }) => (
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
              {examples.map(
                ({ type, message })  => (
                  <Alert type={type} message={message} />
                )
              )}
            </S.ComponentDisplay>
            <S.CodeDisplay></S.CodeDisplay>
          </>
        ))}
      </S.Section>
    </DocLayout>
  );
};
