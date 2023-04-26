import * as React from 'react';
import grades, { Grade } from "../data/Grades";

const Grades = () => (
    <div className="col m12 l10 push-l1 xl8 push-xl2">
        <table id="grades" className="highlight">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {renderSection("Computer Science", "cs")}
                {renderSection("Finance", "fin")}
                {renderSection("Mathematics", "math")}
            </tbody>
        </table>
    </div>
);

const renderSection = (title: string, filter: string): any => {
    const filteredGrades = grades.filter(g => g.type === filter);

    return (
        <>
            <tr>
                <td colSpan={3}>
                    <span className="table-subtitle">{title}</span>
                </td>
            </tr>

            {filteredGrades.map((g, i) => renderGrade(g, i))}
        </>
    );
}

const renderGrade = (grade: Grade, index: number) => {
    return (
        <tr key={index}>
            <td>{grade.code}</td>
            <td>{grade.title}</td>
            <td>{grade.grade}</td>
        </tr>
    );
}

export { Grades };
