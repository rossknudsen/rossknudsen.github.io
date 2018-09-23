import * as React from 'react';
import styled from '../../styled-components';
import IThemeInterface from '../../theme';


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
        return (<StyledIcon><Month>{month}</Month><Year>{year}</Year></ StyledIcon>);
    } else {
        return (<StyledIcon><Year>{year}</Year></ StyledIcon>);
    }
}

const StyledIcon = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
`;

const Year = styled.span`
    text-align: center;
    line-height: 1;
`;

const Month = Year.extend`
    font-size: 1rem;
`;

export default Icon;
