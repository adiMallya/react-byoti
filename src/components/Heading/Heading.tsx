import { HeadingProps, sizeType } from "./Heading.types";
import { HeadingContainer } from "./Heading.styles";

const getHeadingTag = (size: sizeType | undefined) => {
    switch (size) {
        case 'xs': return 'h6';
        case 'sm': return 'h5';
        case 'md': return 'h4';
        case 'lg': return 'h3';
        case 'xl': return 'h2';
        case '2xl': return 'h1';
        default: return 'h2';
    }
};

export const Heading: React.FC<HeadingProps> = (props): JSX.Element => {
    const HeadingTag = getHeadingTag(props.size!);

    return <HeadingContainer {...props} as={HeadingTag}/>;
}