import { List, ListItem, ListItemText, Rating, Typography } from "@mui/material";
import Skills, { ISkill, SkillType } from "../../data/Skills";
import Foreach from "../Foreach";
import Grid from "@mui/system/Unstable_Grid";

const SkillsComponent = () => (
  <Grid container spacing={3}>
    <Section
      title="Languages"
      skills={Skills.filter((s, i) => s.type === SkillType.Language)}
      key={1}
    />
    <Section
      title="Frameworks"
      skills={Skills.filter((s, i) => s.type === SkillType.Framework)}
      key={2}
    />
    <Section
      title="Technologies"
      skills={Skills.filter((s, i) => s.type === SkillType.Technology)}
      key={3}
    />
    <Section
      title="Tools"
      skills={Skills.filter((s, i) => s.type === SkillType.Tool)}
      key={4}
    />
  </Grid>
);

interface SectionProps {
  title: string;
  skills: ISkill[];
}

const Section = ({ title, skills }: SectionProps) => (
  <Grid xs={12} sm={6} lg={4}>
    <Typography variant="h5">{title}</Typography>
    <List>
      <Foreach
        items={skills}
        factory={(x, i) => (
          <ListItem key={i} sx={{paddingX: 0}}>
            <ListItemText>{x.name}</ListItemText>
            <Rating value={x.rating} readOnly style={{ float: "right" }} />
          </ListItem>
        )}
      />
    </List>
  </Grid>
);

export default SkillsComponent;
