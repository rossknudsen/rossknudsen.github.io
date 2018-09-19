import * as React from 'react';
import { IQualificationData } from '../../data/QualificationData';

interface IQualCardProps {
    data: IQualificationData;
}

const Title = (props: IQualCardProps) => {
    const {title, papersRemaining} = props.data;
    return (
        <span>
            {title} <PapersRemaining papersRemaining={papersRemaining}/>
        </span>
    );
}

interface IPapersRemainingProps { 
    papersRemaining: number | undefined;
}

const PapersRemaining = (props: IPapersRemainingProps) => {
    if (!props.papersRemaining) { 
        return <React.Fragment />;
    }
    return (
        <span data-badge-caption="papers remaining"
            className="new badge red activator">{props.papersRemaining}
        </span>
    );
}

export default Title;