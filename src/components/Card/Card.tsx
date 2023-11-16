import { CardProps, CommonProps } from "./Card.types";
import { CardContainer, CardBodyContainer, CardHeaderContainer, CardFooterContainer } from "./Card.styles";

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
    return <CardContainer {...props}>{children}</CardContainer>;
}

export const CardHeader: React.FC<CommonProps> = ({ children, ...props }) => {
    return <CardHeaderContainer {...props}>{children}</CardHeaderContainer>;
} 

export const CardBody: React.FC<CommonProps> = ({ children, ...props }) => {
    return <CardBodyContainer {...props}>{children}</CardBodyContainer>;
} 

export const CardFooter: React.FC<CommonProps> = ({ children, ...props }) => {
    return <CardFooterContainer {...props}>{children}</CardFooterContainer>;
}
