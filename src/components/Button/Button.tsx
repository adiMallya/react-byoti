import { ButtonProps, ToggleProps } from "./Button.types";
import {
  ButtonContainer,
  ToggleContainer,
  ButtonState,
  ButtonSlider,
  FloatingButton,
} from "./Button.styles";

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

export const ToggleSwitch: React.FC<ToggleProps> = (props): JSX.Element => {
  const { color, toggle, ...rest } = props;
  return (
    <ToggleContainer {...rest} aria-label="toggle-switch">
      <ButtonState type="checkbox" onChange={toggle} {...rest} />
      <ButtonSlider color={color} />
    </ToggleContainer>
  );
};

export const FloatingActionButton: React.FC<ButtonProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return <FloatingButton {...rest}>{children}</FloatingButton>;
};
