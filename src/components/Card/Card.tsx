import * as React from 'react';
import styled from "../../styled-components";
import Actions from './Actions';
import Content from './Content';
import Image from './Image';
import Reveal from './Reveal';

interface ICardProps {
    backgroundColor?: string;

    foregroundColor?: string;

    className?: string;

    title?: string | JSX.Element;

    imageUrl?: string;

    actions?: ILink[];

    content?: JSX.Element[] | JSX.Element;

    reveal?: JSX.Element[] | JSX.Element;
}

interface ILink {
    url: string,
    description: string
}

const CardStyled = styled.div.attrs<ICardProps>({ className: "card hoverable" })`
    background-color: ${props => props.backgroundColor || props.theme.light};
    color: ${props => props.foregroundColor || props.theme.dark};
`;

const Card = (props: ICardProps) => (
    <CardStyled>
        <Image imageUrl={props.imageUrl} />

        <Content title={props.title} content={props.content} imageUrl={props.imageUrl} />

        <Reveal title={props.title}>
            {props.reveal}
        </Reveal>

        <Actions links={props.actions} />
    </CardStyled>
);

export default Card;