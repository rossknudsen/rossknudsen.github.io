import * as React from "react";
import qualifications from "../data/Qualifications";
import Foreach from "./Foreach";
import Card from "@mui/material/Card";
import { IQualificationData } from "src/data/QualificationData";
import { Box, CardContent, Typography } from "@mui/material";
import Optional from "./Optional";

const Qualifications = (props: {}) => (
  <Foreach
    items={qualifications}
    factory={(x, i) => <QualificationCard key={i} data={x} />}
  />
);

interface QualificationCardProps {
  data: IQualificationData;
}

const QualificationCard = ({
  data: { completed, institution, title, major, minor },
}: QualificationCardProps) => {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1">
            {major}
            <Optional item={minor} factory={(x) => <> / {x}</>} />
          </Typography>
          <Typography variant="body2">{institution} ({completed})</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Qualifications;
