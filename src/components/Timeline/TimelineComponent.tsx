import { breakpoints } from '../../breakpoints';
import * as React from 'react';
import styled from '../../styled-components';
import TimelineItem from './TimelineItem';

const lineWidth = 7;

export interface ITimelineProps<T> {
    renderIcon: (t: T) => JSX.Element;
    renderContent: (t: T) => JSX.Element;
    items: T[];
}

export default class Timeline<T> extends React.Component<ITimelineProps<T>, any> {

    public render(): JSX.Element {
        const { items, renderContent, renderIcon } = this.props;
        return (
            <TimelineStyled>
                {items.map((e, i) => (
                    <TimelineItem key={i} 
                        icon={renderIcon(e)}
                        content={renderContent(e)} />
                ))}
            </TimelineStyled>
        );
    }  
}

const TimelineStyled = styled.div`
    width: 100%;
    margin: 30px auto;
    position: relative;
    padding: 0 10px;
    transition: all .4s ease;

    @media screen and (max-width: ${breakpoints.xtraLarge}) {
        margin: 30px;
        padding: 0px;
        width: 90%;
    }

    &:before {
        content: "";
        width: ${lineWidth}px;
        height: 100%;
        background: ${props => props.theme.accentDark};
        left: calc(50% - ${lineWidth / 2}px);
        top: 0;
        position: absolute;

        @media screen and (max-width: ${breakpoints.xtraLarge}) {
            left: 0;
        }
    }

    &:after {
        content: "";
        clear: both;
        display: table;
        width: 100%;
    }
`;

