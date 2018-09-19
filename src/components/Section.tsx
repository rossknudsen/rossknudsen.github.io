import * as React from 'react';
import styled from '../styled-components';
import { Row } from './Row';

const Section = (props: ISectionProps) => (
    <>
        <SectionStyled>
            <H2>{props.title}</H2>
            <Row>
                {props.children}
            </Row>
        </SectionStyled>
        <div className="divider" />
    </>
);

const H2 = styled.h2`
    color: ${props => props.theme.dark};
`;

const SectionStyled = styled.section.attrs({ className: "section" })``;

interface ISectionProps {
    title: string;
    children?: React.ReactNode;
}

export { Section };
