import * as React from 'react';
import { IQualificationData } from '../../data/QualificationData';


interface IQualCardProps {
    data: IQualificationData;
}

const Content = (props: IQualCardProps) => {
    const { data } = props;
    return (
        <>
            <p>Institution: {data.institution}</p>
            {data.major && <p>Major: {data.major}</p>}
            {data.minor && <p>Minor: {data.minor}</p>}
            {data.supportingSubjects && <p>Supporting Subjects: {data.supportingSubjects}</p>}
            <p>Completed: {data.completed}</p>
        </>
    );
}

export default Content;