import { ButtonProps } from "./Button.types";
import { ButtonContainer } from "./Button.styles";

export const Button: React.FC<ButtonProps> = ({ children, ...rest }): JSX.Element => {
    return <ButtonContainer {...rest}><span aria-label="button-label">{children}</span></ButtonContainer>
}