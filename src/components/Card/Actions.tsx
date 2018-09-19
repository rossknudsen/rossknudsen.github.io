import * as React from 'react';
import styled from 'styled-components';

interface IActionsProps {
    links?: ILink[];
}

interface ILink {
    url: string,
    description: string
}

const Actions = (props: IActionsProps) => {
    if (!props.links || props.links.length === 0) {
        return null;
    }
    return (
        <CardAction>
            {props.links.map((l, i) => (
                <a key={i} 
                    href={l.url} 
                    target="_blank">
                    {l.description}
                </a>
            ))}            
        </CardAction>
    )
}

const CardAction = styled.div.attrs({ className: "card-action" })``;

export default Actions;