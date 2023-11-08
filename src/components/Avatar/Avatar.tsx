import { AvatarProps } from "./Avatar.types";
import { AvatarContainer } from "./Avatar.styles";

export const Avatar: React.FC<AvatarProps> = (props): JSX.Element => {
  const { size, src, name, bg, children } = props;

  const initials = name!
    .split(" ")
    .map((name) => name[0].toUpperCase())
    .join("") || "?";

  return (
    <AvatarContainer bg={bg} aria-label={name} size={size}>
      {src ? (<img src={src} alt={name} />) : (initials)}
      {children}
    </AvatarContainer>
  );
};
