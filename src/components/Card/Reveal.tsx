import * as React from 'react';
import styled from "styled-components";
import { Close } from "styled-icons/material";

interface IRevealProps {
    title?: string | JSX.Element;
    children?: JSX.Element[] | JSX.Element;
}

const Reveal = (props: IRevealProps) => (
    <CardReveal>
        <span className={"card-title"}>
            {props.title}
            <CloseStyled />
        </span>
        {props.children}
    </CardReveal>
);

const CardReveal = styled.div.attrs({ className: "card-reveal" })``;

const CloseStyled = styled(Close).attrs({ className: "close" })`
    height: 30px;
    width: 30px;
`;

export default Reveal;