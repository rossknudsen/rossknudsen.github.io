import * as React from 'react';
import qualifications from "../data/Qualifications";
import QualificationCard from './QualificationCard';

const Qualifications = () => (
    <>{qualifications.map((q, i) => <QualificationCard key={i} data={q} />)}</>
);

export default Qualifications;
