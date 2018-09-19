import * as React from 'react'
import { ThemeProvider } from '../styled-components';
import { theme } from '../theme';
import FooterComponent from './Footer'
import GradesComponent from './GradesComponent';
import HeaderComponent from './HeaderComponent';
import Paragraph from './Paragraph';
import Qualifications from './Qualifications';
import { Section } from './Section';
import { SkillsComponent } from './SkillsComponent';
import WorkExperienceTimeline from './WorkExperienceTimeline';

export default () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <>
                    <HeaderComponent background={theme.mainBrand} />

                    <div className="container">

                        <Section title="Work Experience">
                            <WorkExperienceTimeline theme={theme} />
                        </Section>

                        <Section title="Skills">
                            <SkillsComponent />
                        </Section>

                        <Section title="Qualifications">
                            <Qualifications />

                            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quos iusto non nemo expedita, id ad fugit voluptatum
                        perferendis neque voluptates animi explicabo est harum veritatis quae aspernatur rerum odio.</Paragraph>
                        </Section>

                        <Section title="Grades">
                            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quos iusto non nemo expedita, id ad fugit voluptatum
                    perferendis neque voluptates animi explicabo est harum veritatis quae aspernatur rerum odio.</Paragraph>

                            <GradesComponent />
                        </Section>
                    </div>

                    <FooterComponent />
                </>
            </ThemeProvider>
        </>
    )
}
