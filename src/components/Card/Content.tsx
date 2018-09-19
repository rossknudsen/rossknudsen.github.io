import * as React from 'react';
import styled from 'styled-components';

export interface IContentProps {
    title?: string | JSX.Element;
    content?: JSX.Element[] | JSX.Element;
    imageUrl?: string;
}

const Content = (props: IContentProps) => (
    <CardContent>
        {props.title && <Title title={props.title} />}
        {props.content && props.content}
    </CardContent>
);

const CardContent = styled.div.attrs({ className: "card-content" })``;

interface ITitleProps {
    title?: string | JSX.Element;
}

const Title = (props: ITitleProps): JSX.Element => <span className="card-title">{props.title}</span>;

export default Content;