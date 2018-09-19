import * as React from 'react'
import grades, { Grade } from "../data/Grades";


export default class GradesComponent extends React.Component<any, any> {

    public render() {
        return (
            <div className="col m12 l8 push-l2">
                <table id="grades" className="highlight">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSection("Computer Science", "cs")}

                        {this.renderSection("Finance", "fin")}

                        {this.renderSection("Mathematics", "math")}
                    </tbody>
                </table>
            </div>
        )
    }

    private renderSection(title: string, filter: string): any {
        const filteredGrades = grades.filter(g => g.type === filter);

        return (
            <React.Fragment>
                <tr>
                    <td colSpan={3}>
                        <span className="table-subtitle">{title}</span>
                    </td>
                </tr>

                {filteredGrades.map((g, i) => this.renderGrade(g, i))}
            </React.Fragment>
        );
    }

    private renderGrade(grade: Grade, index: number) {
        return (
            <tr key={index}>
                <td>{grade.code}</td>
                <td>{grade.title}</td>
                <td>{grade.grade}</td>
            </tr>
        );
    }
}
