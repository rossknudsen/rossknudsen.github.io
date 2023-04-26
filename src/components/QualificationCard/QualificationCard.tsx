import * as React from "react";
import Content from "./Content";
import Card from "@mui/material/Card";
import { IQualificationData } from "../../data/QualificationData";

interface IQualCardProps {
  data: IQualificationData;
}

const QualificationCard = (props: IQualCardProps) => {
  const { data } = props;
  return (
    <Card>
      <Content data={data} />
    </Card>
  );
};

export default QualificationCard;
