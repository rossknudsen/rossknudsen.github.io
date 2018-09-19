import * as React from 'react';
import Skills, { Skill, SkillType } from "../data/Skills";

export const SkillsComponent = () => (
    <div className="skills">
        {renderSection("Languages", Skills.filter((s, i) => s.type === SkillType.Language))}

        {renderSection("Frameworks", Skills.filter((s, i) => s.type === SkillType.Framework))}

        {renderSection("Technologies", Skills.filter((s, i) => s.type === SkillType.Technology))}

        {renderSection("Tools", Skills.filter((s, i) => s.type === SkillType.Tool))}
    </div>
)

const renderSection = (title: string, skills: Skill[]) => (
    <ul>
        {skills.map((s, i) => <li key={i}>{s.name}</li>)}
    </ul>
);
