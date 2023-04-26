import * as React from 'react';
import { IQualificationData } from '../../data/QualificationData';

interface IQualCardProps {
    data: IQualificationData;
}

const Title = (props: IQualCardProps) => {
    const {title} = props.data;
    return (
        <span>
            <span className="card-title">{title}</span>
        </span>
    );
}

export default Title;