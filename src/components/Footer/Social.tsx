import * as React from 'react';
import { Github, Linkedin, Twitter } from "styled-icons/fa-brands";
import { ISocialProps, SocialOptions } from "../../data/Social";
import styled from "../../styled-components";

const Social = (props: ISocialProps): JSX.Element => {
    let icon;
    switch (props.type) {
        case SocialOptions.github:
            icon = Github;
            break;

        case SocialOptions.linkedin:
            icon = Linkedin;
            break;

        case SocialOptions.twitter:
            icon = Twitter;
            break;
    
        default:
            throw new Error();
    }
    const IconStyled = styled(icon)`
        width: 64px;
        height: 64px;
        color: white;

        :hover {
            filter: drop-shadow(0 0 5px white);
        }
    `;
    return (
        <AStyled href={props.link}>
            <IconStyled title={props.type.toString()} />
        </AStyled>
    );
}

const AStyled = styled.a`
    display: block;
    margin: 0 10px;
`;

export { Social };