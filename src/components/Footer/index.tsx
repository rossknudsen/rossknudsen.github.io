import * as React from 'react';
import { SocialContainer } from './SocialContainer';
import BottomNavigation from '@mui/material/BottomNavigation';

export const Footer = () => {
    return (
        <BottomNavigation>
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
        </BottomNavigation>
    )
}
