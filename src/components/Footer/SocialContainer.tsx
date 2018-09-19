import * as React from 'react';
import { socialData } from '../../data/Social';
import styled from "../../styled-components";
import { Social } from './Social';

const SocialContainer = () => (
    <SocialLinks>
        {socialData.map((s, i) => <Social key={i} {...s} />)}
    </SocialLinks>
);

const SocialLinks = styled.div.attrs({ className: "col l6 s12" })`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
`;

export { SocialContainer };