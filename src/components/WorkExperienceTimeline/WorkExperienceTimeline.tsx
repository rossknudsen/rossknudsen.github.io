import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import React from "react";
import workExperience, { IPosition, ITenure } from "../../data/WorkExperience";
import Foreach from "../Foreach";
import { Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Card>
          <CardContent>
            {tenure.employer.name}
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

const Position = ({ position }: PositionProps) => {
  return (
    <Typography variant="body2">
      {position.title} ({position.duration}) {position.workExamples}
    </Typography>
  );
};

export default WorkExperienceTimeline;
