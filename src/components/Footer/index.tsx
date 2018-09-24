import * as React from 'react';
import styled from '../../styled-components';
import { SocialContainer } from './SocialContainer';

export const Footer = () => {
    return (
        <FooterStyled>
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <p className="center grey-text text-lighten-4">
                            Please connect or follow me in a professional capacity with the following social links
                        </p>
                    </div>

                    <SocialContainer />
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    &copy; 2018 Ross Knudsen
                </div>
            </div>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer.attrs({ className: "page-footer" })`
    background-color: ${props => props.theme.dark};
    color: ${props => props.theme.light};
`;
