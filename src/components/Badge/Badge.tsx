import { BadgeProps, AvatarBadgeProps } from "./Badge.types";
import { BadgeContainer, StatusBadge } from "./Badge.styles";

export const Badge: React.FC<BadgeProps> = (props): JSX.Element => {
    return <BadgeContainer {...props} />
};

export const AvatarBadge: React.FC<AvatarBadgeProps> = (props): JSX.Element => {
    return <StatusBadge {...props}/>
}