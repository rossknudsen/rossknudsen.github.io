import { List, ListItem, ListItemText, Rating } from "@mui/material";
import Skills, { ISkill, SkillType } from "../../data/Skills";
import Foreach from "../Foreach";

const SkillsComponent = () => (
  <>
    <Section
      title="Languages"
      skills={Skills.filter((s, i) => s.type === SkillType.Language)}
    />
    <Section
      title="Frameworks"
      skills={Skills.filter((s, i) => s.type === SkillType.Framework)}
    />
    <Section
      title="Technologies"
      skills={Skills.filter((s, i) => s.type === SkillType.Technology)}
    />
    <Section
      title="Tools"
      skills={Skills.filter((s, i) => s.type === SkillType.Tool)}
    />
  </>
);

interface SectionProps {
  title: string;
  skills: ISkill[];
}

const Section = ({ skills }: SectionProps) => (
  <List>
    <Foreach
      items={skills}
      factory={(x, i) => (
        <ListItem key={i}>
          <ListItemText >{x.name}</ListItemText>
          <Rating value={x.rating} readOnly style={{ float: "right" }} />
        </ListItem>
      )}
    />
  </List>
);

export default SkillsComponent
