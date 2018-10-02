import * as React from 'react';
import workExperience, { ITenure } from "../../data/WorkExperience";
import IThemeInterface from '../../theme';
import Timeline from "../Timeline/TimelineComponent";
import Icon from './icon';
import WorkCard from './workcard';


interface IWorkExperienceTimelineProps {
    theme: IThemeInterface;
}

const WorkExperienceTimeline = (props: IWorkExperienceTimelineProps) => {
    const icon = (tenure: ITenure) => <Icon {...props} from={tenure.positions[0].from} />;
    const content = (tenure: ITenure) => <WorkCard {...props} tenure={tenure} />;
    return (
        <Timeline
            renderIcon={icon}
            renderContent={content}
            items={workExperience} />
    );
}

export default WorkExperienceTimeline;
