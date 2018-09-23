import * as React from 'react';
import styled, { css } from '../../styled-components';
import IThemeInterface from '../../theme';
import { breakpoints } from '../../breakpoints';

const iconWidth = 75;
const calloutSize = 7;
const cardGap = 10;

export interface ITimelineItemProps {
    icon: JSX.Element;
    content: JSX.Element;
    index: number;
    background: string;
    color: string;
}

const TimelineItem = (props: ITimelineItemProps): JSX.Element => (
    <TimelineItemStyled>
        <TimelineIcon background={props.background} color={props.color}>
            {props.icon}
        </TimelineIcon>
        <TimelineContent alignRight={(props.index % 2 === 0)}>
            {props.content}
        </TimelineContent>
    </TimelineItemStyled>
);

const TimelineItemStyled = styled.div`
    margin-bottom: 25px;
    position: relative;

    &:after,
    &:before {
        content: '';
        display: block;
        width: 100%;
        clear: both;
    }
`;

interface ITestProps {
    alignRight: boolean;
}

const TimelineContent = styled.div<ITestProps>`
    width: calc(50% - ${iconWidth / 2}px - 10px);
    background: #fff;
    transition: all .3s ease;    

    &:before {
        content: '';
        position: absolute;        
        top: ${(iconWidth - calloutSize) / 2}px;
        width: 0;
        height: 0;
        border-top: ${calloutSize}px solid transparent;
        border-bottom: ${calloutSize}px solid transparent;        
    }

    ${(props) => getAlignmentCss(props.theme, props.alignRight)}

    @media screen and (max-width: ${breakpoints.xtraLarge}) {
        width: 90%;
        float: right;
        &:before {
            left: ${iconWidth + cardGap}px;
            margin-left: -6px;
            border-left: 0;
            border-right: ${calloutSize}px solid ${props => props.theme.light};
        }
    }            
`;

const getAlignmentCss = (theme: IThemeInterface, alignRight: boolean) => {
    if (alignRight) {
        return css`
            &:before {
                left: calc(50% - ${iconWidth / 2}px - ${cardGap}px);
                border-left: ${calloutSize}px solid ${theme.light};
            }
        `;
    } else {
        return css`
            float: right;
            &:before {
                right: calc(50% - ${iconWidth / 2}px - ${cardGap}px);
                left: inherit;
                border-left: 0;
                border-right: ${calloutSize}px solid ${theme.light};
            }
        `;
    }
}

interface ITimelineIconProps {
    background: string;
    color: string;
}

const TimelineIcon = styled.div<ITimelineIconProps>`
    background: ${props => props.background};
    width: ${iconWidth}px;
    height: ${iconWidth}px;
    position: absolute;
    top: 0;
    left: 50%;
    overflow: hidden;
    margin-left: -${iconWidth / 2}px;  /* This centers the icon, otherwise it would be centered on its left edge. */
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.color};
    font-size: 1.5rem;
    font-weight: bold;

    @media screen and (max-width: ${breakpoints.xtraLarge}) {
        left: 0;                
    }
`;


export default TimelineItem;