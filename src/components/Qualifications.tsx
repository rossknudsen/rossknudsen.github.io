import * as React from 'react';
import qualifications from "../data/Qualifications";
import QualificationCard from './QualificationCard';
import IThemeInterface from '../theme';

const Qualifications = (props: {theme: IThemeInterface}) => (
    <>{qualifications.map((q, i) => <QualificationCard key={i} data={q} />)}</>
);

export default Qualifications;
