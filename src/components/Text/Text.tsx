import { TextProps } from "./Text.types";
import { TextContainer } from "./Text.styles";

export const Text: React.FC<TextProps> = (props): JSX.Element => {

    return <TextContainer {...props} />;
}