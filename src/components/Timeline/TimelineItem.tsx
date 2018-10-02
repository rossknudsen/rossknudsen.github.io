import * as React from "react";
import styled from "../../styled-components";
import { TimelineContent } from "./TimelineContent";
import { TimelineIcon } from "./TimelineIcon";
import { breakpoints } from "../../breakpoints";

const iconWidth = 75;
const calloutSize = 7;
const cardGap = 10;

export interface ITimelineItemProps {
  icon: JSX.Element;
  content: JSX.Element;
}

const TimelineItem = (props: ITimelineItemProps): JSX.Element => (
  <TimelineItemStyled>
    <TimelineIcon>{props.icon}</TimelineIcon>
    <TimelineContent>{props.content}</TimelineContent>
  </TimelineItemStyled>
);

const TimelineItemStyled = styled.div`
  margin-bottom: 25px;
  position: relative;

  @media screen and (max-width: ${breakpoints.xtraLarge}) {
    &:nth-child(even) ${TimelineContent} {
      float: right;

      /* Callout styling */
      &:before {
        right: calc(50% - ${iconWidth / 2 + cardGap}px);
        left: inherit;
        border-left: 0;
        border-right: ${calloutSize}px solid ${props => props.theme.dark};
      }
    }
  }

  &:after,
  &:before {
    content: "";
    display: block;
    width: 100%;
    clear: both;
  }
`;

export default TimelineItem;
