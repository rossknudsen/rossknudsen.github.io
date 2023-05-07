import Typography from "@mui/material/Typography";

const Section = (props: ISectionProps) => (
  <>
    <div>
      <Typography variant="h2">{props.title}</Typography>
      {props.children}
    </div>
    <div className="divider" />
  </>
);

interface ISectionProps {
  title: string;
  children?: React.ReactNode;
}

export { Section };
