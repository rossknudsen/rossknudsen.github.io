import * as React from 'react';
import styled from '../styled-components';

interface IHeaderProps {
    background: string;
}

export default (props: IHeaderProps) => (
    <Nav {...props}>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo center"><h1>Ross Knudsen</h1></a>
        </div>
        <div>
            <ul className="tabs tabs-transparent">
                <li className="tab">
                    <a href="/">Menu item</a>
                </li>
            </ul>
        </div>
    </Nav>
)

const Nav = styled.nav.attrs({ className: "nav-extended" })<IHeaderProps>`
    background: ${props => props.background};
`;
