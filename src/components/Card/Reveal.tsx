import * as React from 'react';
import styled from "styled-components";
// import { Close } from "styled-icons/material";

// when using the styled icons, the result is a SVG which doesn't seem
// to pass on click events to its parent.  Causing the close icon to
// not actually trigger a close of the reveal...

interface IRevealProps {
    title?: string | JSX.Element;
    children?: JSX.Element[] | JSX.Element;
}

const Reveal = (props: IRevealProps) => (
    <CardReveal>
        <span className={"card-title"}>
            {props.title}
            <i className="material-icons right">close</i>
        </span>
        {props.children}
    </CardReveal>
);

const CardReveal = styled.div.attrs({ className: "card-reveal" })``;

// const CloseStyled = styled(Close).attrs({ className: "close right" })`
//     height: 30px;
//     width: 30px;
// `;

export default Reveal;