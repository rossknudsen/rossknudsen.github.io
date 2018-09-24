import * as React from 'react';
import { IQualificationData } from '../../data/QualificationData';
import styled from '../../styled-components';
import Title from './Title';


interface IQualCardProps {
    data: IQualificationData;
}

const Content = (props: IQualCardProps) => {
    const { data } = props;
    return (
        <ContentStyled>
            <Title data={data} />
            <p>Institution: {data.institution}</p>
            {data.major && <p>Major: {data.major}</p>}
            {data.minor && <p>Minor: {data.minor}</p>}
            {data.supportingSubjects && <p>Supporting Subjects: {data.supportingSubjects}</p>}
            <p>Completed: {data.completed}</p>
        </ContentStyled>
    );
}

const ContentStyled = styled.div.attrs({ className: "card-content" })``;

export default Content;