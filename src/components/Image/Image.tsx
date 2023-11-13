import { ImageProps } from "./Image.types";
import { ImageContainer } from "./Image.styles";

export const Image: React.FC<ImageProps> = (props): JSX.Element => {
    return <ImageContainer {...props}/>   
}