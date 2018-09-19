import * as React from 'react';
import workExperience, { IPosition, ITenure } from "../data/WorkExperience";
import IThemeInterface from '../theme';
import Card from './Card';
import Timeline from "./Timeline/TimelineComponent";


interface IWorkExperienceTimelineProps {
    theme: IThemeInterface;
}

const WorkExperienceTimeline = (props: IWorkExperienceTimelineProps) => {
    const icon = (tenure: ITenure) => <Icon {...props} from={tenure.positions[0].from} />;
    const content = (tenure: ITenure) => <WorkCard {...props} tenure={tenure} />;
    return (
        <Timeline
            timelineColor={props.theme.accentDark}
            renderIcon={icon}
            renderContent={content}
            items={workExperience} />
    );
}

interface IIconProps {
    from: number | Date;
    theme: IThemeInterface;
}

const Icon = (props: IIconProps): JSX.Element => {
    const { from } = props;
    let year: number;
    let month: string | null = null;

    if (from instanceof Date) {
        const date: Date = from;
        year = date.getFullYear();
        month = date.toLocaleString("en-US", { month: "long" });
    }
    else if (typeof from === "number") {
        year = from;
    }
    else {
        throw Error("Unable to process date for icon.");
    }

    // let partyear: string = year.toString().substr(2, 2);
    if (month) {
        return (<>{month}<br />{year}</>);
    } else {
        return (<>{year}</>);
    }
}

interface IWorkCardProps {
    tenure: ITenure;
    theme: IThemeInterface;
}

const WorkCard = (props: IWorkCardProps): JSX.Element => {
    return (
        <Card title={props.tenure.employer.name}
            content={<Content {...props} />}
            reveal={<Reveal {...props} />}
            // imageUrl={employer.logoUrl}
            backgroundColor={props.theme.light}
            foregroundColor={props.theme.dark}
        />
    );
}

const Content = (props: IWorkCardProps) => {
    return (
        <>
            <p>{props.tenure.employer.description}</p>
            {props.tenure.positions.map((p, i) => <PositionDetail position={p} key={i} />)}
        </>
    );
}

const PositionDetail = (props: IDurationProps) => {
    return (<h6>{props.position.title} <Duration position={props.position} /></h6>);
}

const Reveal = (props: IWorkCardProps) => (
    <>
        <WorkExamples {...props} />
        <Achievements {...props} />
    </>
);

interface IDurationProps {
    position: IPosition;
}

const Duration = (props: IDurationProps) => {
    const to = renderYearOrDate(props.position.to);
    const from = renderYearOrDate(props.position.from);

    return <>{props.position.duration} ({from} - {to})</>;
}

// This function returns a string that presents the given input for display.  The input is a full date
// or just a number representing the year.
const renderYearOrDate = (yearOrDate: number | Date | null) => {

    if (yearOrDate === null) {
        return "Current";
    }
    else if (yearOrDate instanceof Date) {
        const date: Date = yearOrDate;
        return `${date.toLocaleDateString("en-NZ", { month: "short" })} ${date.getFullYear().toString()}`;
    }
    else if (typeof yearOrDate === "number") {
        const num: number = yearOrDate;
        return num.toString();
    }
    throw Error("Unable to determine year or date from input.");
}

const WorkExamples = (props: IWorkCardProps) => {
    const workExamples = combinePositionData(props.tenure, p => p.workExamples || []);

    if (!workExamples || workExamples.length === 0) {
        // return an empty element.
        return <React.Fragment />;
    }

    return (
        <React.Fragment>
            <h5>Examples of work</h5>
            <ul>
                {workExamples.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
        </React.Fragment>
    );
}

const Achievements = (props: IWorkCardProps) => {
    const achievements = combinePositionData(props.tenure, p => p.achievements || []);

    if (!achievements || achievements.length === 0) {
        // return an empty element.
        return <React.Fragment />;
    }

    return (
        <React.Fragment>
            <h5>Key Achievements</h5>
            <ul>
                {achievements.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
        </React.Fragment>
    );
}

const combinePositionData = (tenure: ITenure, positionPropertySelect: (p: IPosition) => string[]): string[] => {
    return (
        tenure.positions.map(positionPropertySelect)
            .reduce((l, r) => (l || []).concat(r || []))
    );
}

export default WorkExperienceTimeline;
