import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import workExperience, { IPosition, ITenure } from "../../data/WorkExperience";
import Foreach from "../Foreach";
import { Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const WorkExperienceTimeline = () => {
  const theme = useTheme();
  const onMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const direction = onMobile ? undefined : "alternate";
  const sx = onMobile
    ? {
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        paddingX: 0
      }
    : undefined;

  return (
    <Timeline position={direction} sx={sx}>
      <Foreach
        items={workExperience}
        factory={(x, i) => (
          <Item isLast={i == workExperience.length - 1} tenure={x} key={i} />
        )}
      />
    </Timeline>
  );
};

interface ItemProps {
  isLast: boolean;
  tenure: ITenure;
}

const Item = ({ isLast, tenure }: ItemProps) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        {<TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
          <Card raised>
          <CardContent sx={{textAlign: "left"}}>
          <Typography variant="h5">{tenure.employer.name}</Typography>
          <Foreach
            items={tenure.positions}
            factory={(x, i) => <Position position={x} key={i} />}
          />
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

interface PositionProps {
  position: IPosition;
}

const useStyles = makeStyles((theme) => {
  return {
    list: {
      listStyleType: "disc",
      paddingLeft: theme.spacing(2),
    },
  };
});

const Position = ({ position }: PositionProps) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="subtitle2">
        {position.title} ({position.duration})
      </Typography>
      <ul className={classes.list}>
        <Foreach
          items={position.workExamples ?? []}
          factory={(p, i) => <WorkExample position={p} key={i} />}
        />
      </ul>
    </>
  );
};

interface WorkExampleProps {
  position: string;
}

const WorkExample = ({ position }: WorkExampleProps) => {
  return (
    <li>
      <Typography variant="body2">{position}</Typography>
    </li>
  );
};

export default WorkExperienceTimeline;
