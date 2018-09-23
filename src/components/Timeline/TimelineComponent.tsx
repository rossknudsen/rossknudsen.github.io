import * as React from 'react';
import styled from '../../styled-components';
import TimelineItem from './TimelineItem';

export interface ITimelineProps<T> {

    // TODO I would like to change the types of the parameters of the functions
    // passed into the constructor to be of type 'T' but this causes errors.
    renderIcon: (t: any) => JSX.Element;
    renderContent: (t: any) => JSX.Element;
    items: any[];
    timelineColor: string;
}

export default class Timeline<T> extends React.Component<ITimelineProps<T>, any> {

    public render(): JSX.Element {
        const { items, renderContent, renderIcon, timelineColor } = this.props;
        return (
            <TimelineStyled timelineColor={timelineColor}>
                {items.map((e, i) => (
                    <TimelineItem key={i} 
                        icon={renderIcon(e)}
                        content={renderContent(e)}
                        index={i}
                        background={timelineColor} 
                        color="white" />
                ))}
            </TimelineStyled>
        );
    }  
}

const TimelineStyled = styled.div<{timelineColor: string}>`
    width: 100%;
    margin: 30px auto;
    position: relative;
    padding: 0 10px;
    transition: all .4s ease;

    &:before {
        content: "";
        width: 3px;
        height: 100%;
        background: ${props => props.timelineColor};
        left: 50%;
        top: 0;
        position: absolute;
    }

    &:after {
        content: "";
        clear: both;
        display: table;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        margin: 30px;
        padding: 0px;
        width: 90%;
        &:before {
            left: 0;
        }
    }
`;

