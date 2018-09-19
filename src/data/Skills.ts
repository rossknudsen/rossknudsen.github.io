export enum SkillType {
    Language,
    Technology,
    Framework,
    Tool
}

export class Skill {
    constructor(
        public name: string,
        public type: SkillType
    ) { }
}

const Skills: Skill[] = [

    { name: "C#.Net", type: SkillType.Language },
    { name: "VB.Net", type: SkillType.Language },
    { name: "Java", type: SkillType.Language },
    { name: "Javascript", type: SkillType.Language },
    { name: "Typescript", type: SkillType.Language },
    { name: "SQL", type: SkillType.Language },
    { name: "Python", type: SkillType.Language },
    { name: "HTML", type: SkillType.Language },
    { name: "CSS", type: SkillType.Language },
    { name: "VBA", type: SkillType.Language },

    { name: "MySQL", type: SkillType.Technology },
    { name: "SQL Server", type: SkillType.Technology },
    { name: "Sqlite" , type: SkillType.Technology},
    { name: "Entity Framework (6+, Core)", type: SkillType.Framework },
    { name: "Automapper", type: SkillType.Framework },
    { name: "XUnit", type: SkillType.Framework },

    { name: "Azure Apps", type: SkillType.Technology },
    { name: "Azure Functions", type: SkillType.Technology },
    { name: "Office 365", type: SkillType.Technology },

    { name: "Git", type: SkillType.Tool },
    { name: "Visual Studio", type: SkillType.Tool },
    { name: "Visual Studio Code", type: SkillType.Tool },
    { name: "SQL Server Management Studio", type: SkillType.Tool },
    { name: "NetBeans", type: SkillType.Tool },
    { name: "IntelliJ Idea", type: SkillType.Tool },
    { name: "SourceTree (Git client)", type: SkillType.Tool },

];

export default Skills;