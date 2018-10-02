import styled from "../../styled-components";
import { breakpoints } from "../../breakpoints";

const iconWidth = 75;
const calloutSize = 7;
const cardGap = 10;

const TimelineContent = styled.div`
  width: calc(50% - ${iconWidth / 2}px - ${cardGap}px);
  background: #fff;
  transition: all 0.3s ease;

  @media screen and (max-width: ${breakpoints.xtraLarge}) {
    width: calc(100% - ${iconWidth / 2 + cardGap}px);
    float: right;
  }

  /* Callout styling. */
  &:before {
    position: absolute;
    content: "";

    top: ${(iconWidth - calloutSize) / 2}px;
    left: calc(50% - ${iconWidth / 2 + cardGap}px);    
    width: 0;
    height: 0;

    border-left: ${calloutSize}px solid ${props => props.theme.dark};
    border-top: ${calloutSize}px solid transparent;
    border-bottom: ${calloutSize}px solid transparent;

    @media screen and (max-width: ${breakpoints.xtraLarge}) {
      left: ${iconWidth / 2 + cardGap}px;
      margin-left: -6px;
      border-left: 0;
      border-right: ${calloutSize}px solid ${props => props.theme.dark};
    }
  }
`;

export { TimelineContent };
