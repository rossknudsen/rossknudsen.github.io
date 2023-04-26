import * as React from 'react';
import { IQualificationData } from '../../data/QualificationData';
import Title from './Title';
import Paper from '@mui/material/Paper';

interface IQualCardProps {
    data: IQualificationData;
}

const Content = (props: IQualCardProps) => {
    const { data } = props;
    return (
        <Paper>
            <Title data={data} />
            <p>Institution: {data.institution}</p>
            {data.major && <p>Major: {data.major}</p>}
            {data.minor && <p>Minor: {data.minor}</p>}
            {data.supportingSubjects && <p>Supporting Subjects: {data.supportingSubjects}</p>}
            <p>Completed: {data.completed}</p>
        </Paper>
    );
}

export default Content;