import * as React from 'react';
import styled from '../../styled-components';
import Content from './Content';

import { IQualificationData } from "../../data/QualificationData";

interface IQualCardProps {
    data: IQualificationData;
}

const QualificationCard = (props: IQualCardProps) => {
    const { data } = props;
    return (
        <Column>
            <CardStyled>
                <Content data={data} />
                {renderActions(data.link ? [data.link] : [])}
            </CardStyled>
        </Column>
    );
}

const Column = styled.div.attrs({ className: "col s12 m6" })``;

const CardStyled = styled.div.attrs({ className: "card hoverable" })`
    background-color: ${props => props.theme.dark};
    color: ${props => props.theme.light};
`;

interface ILink {
    url: string,
    description: string
}

const renderActions = (links?: ILink[]) => {
    if (!links || links.length === 0) {
        return null;
    }
    return (
        <CardAction>
            {links.map((l, i) => (
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

export default QualificationCard;