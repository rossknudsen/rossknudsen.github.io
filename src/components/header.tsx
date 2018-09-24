import * as React from 'react';
import styled from '../styled-components';

interface IHeaderProps {
    background: string;
}

const Header = (props: IHeaderProps) => (
    <Nav {...props}>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo center">Ross Knudsen</a>
        </div>
    </Nav>
)

const Nav = styled.nav.attrs({ className: "nav-extended" })<IHeaderProps>`
    background: ${props => props.background};
`;

export { Header };