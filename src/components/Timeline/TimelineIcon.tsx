import styled from '../../styled-components';
import { breakpoints } from '../../breakpoints';

const iconWidth = 75;

const TimelineIcon = styled.div`
    background: ${props => props.theme.accentDark};
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
    color: ${props => props.theme.light};
    font-size: 1.5rem;
    font-weight: bold;

    @media screen and (max-width: ${breakpoints.xtraLarge}) {
        left: 0;                
    }
`;

export { TimelineIcon };