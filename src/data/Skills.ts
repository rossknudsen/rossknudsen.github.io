export enum SkillType {
  Language,
  Technology,
  Framework,
  Tool,
}

export interface ISkill {
  name: string;
  type: SkillType;
  rating: number
}

const Skills: ISkill[] = [
  { name: "C#.Net", type: SkillType.Language, rating: 5 },
  { name: "Typescript/Javascript", type: SkillType.Language, rating: 4 },
  { name: "SQL", type: SkillType.Language, rating: 4 },
  { name: "Python", type: SkillType.Language, rating: 2 },
  { name: "HTML", type: SkillType.Language, rating: 4 },
  { name: "CSS", type: SkillType.Language, rating: 3 },
  { name: "ASP.Net Core", type: SkillType.Technology, rating: 5 },
  { name: "Azure Functions", type: SkillType.Technology, rating: 5 },
  { name: "Java", type: SkillType.Language, rating: 1 },

  { name: "SQL", type: SkillType.Technology, rating: 4 },
  { name: "SQL Server", type: SkillType.Technology, rating: 4 },
  { name: "Sqlite", type: SkillType.Technology, rating: 3 },
  { name: "Entity Framework Core", type: SkillType.Framework, rating: 5 },

  // Unit Testing
  { name: "XUnit", type: SkillType.Framework, rating: 5 },
  { name: "NUnit", type: SkillType.Framework, rating: 4 },
  { name: "Jest", type: SkillType.Framework, rating: 4 },
  { name: "Jest", type: SkillType.Framework, rating: 4 },

  // Cloud
  { name: "Azure", type: SkillType.Technology, rating: 4 },

  { name: "Git", type: SkillType.Tool, rating: 5 },
  { name: "Visual Studio", type: SkillType.Tool, rating: 5 },
  { name: "Visual Studio Code", type: SkillType.Tool, rating: 5 },
  // Linqpad
];

export default Skills;
