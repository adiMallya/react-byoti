import { ButtonProps } from "./Button.types";
import { ButtonContainer } from "./Button.styles";

export const Button: React.FC<ButtonProps> = ({
  children,
  ...rest
}): JSX.Element => {
    const { label } = rest;
  return (
    <ButtonContainer {...rest}>
      <span aria-label="button-label">
        {children}
        <span>{label}</span>
      </span>
    </ButtonContainer>
  );
};
