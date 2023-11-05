import { AvatarProps } from "./Avatar.types";
import { AvatarContainer } from "./Avatar.styles";

export const Avatar: React.FC<AvatarProps> = (props): JSX.Element => {
  const { src, name } = props;

  const initials = name
    .split(" ")
    .map((name) => name[0].toUpperCase())
    .join("");

  return (
    <AvatarContainer src={src} alt={name} {...props}>
      {src ? null : (initials || "?")}
    </AvatarContainer>
  );
};
