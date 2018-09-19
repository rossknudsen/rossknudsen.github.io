import * as React from "react";
import styled from "styled-components";

export interface IImageProps {
    imageUrl?: string;
}

export const Image = (props: IImageProps) => {
    if (!props.imageUrl) {
        return null;
    }
    return (
        <CardImage>
            <ImgStyled src={props.imageUrl} />
        </CardImage>
    );
}

const CardImage = styled.div.attrs({ className: "card-image waves-effect waves-block waves-light" })``;

const ImgStyled = styled.img.attrs({ className: "activator" })`
    background-color: white;
`;

export default Image;