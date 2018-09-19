import * as React from 'react';
import styled from '../../styled-components';
import Card from '../Card';
import Content from './Content';
import Title from './Title';

import { IQualificationData } from "../../data/QualificationData";

interface IQualCardProps {
    data: IQualificationData;
}

const QualificationCard = (props: IQualCardProps) => {
    const { data } = props;
    return (
        <Column>
            <CardStyled
                title={<Title data={data} />}
                content={<Content data={data} />}
                actions={data.link ? [data.link] : []}
                />
        </Column>
    );
}

const Column = styled.div.attrs({ className: "col s12 m6" })``;

const CardStyled = styled(Card)`
    background-color: ${props => props.theme.mainBrand};
    color: ${props => props.theme.light};
`;

export default QualificationCard;