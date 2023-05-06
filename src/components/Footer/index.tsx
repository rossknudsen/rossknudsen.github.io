import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { ISocialProps, SocialOptions, socialData } from "../../data/Social";
import Foreach from "../Foreach";
import Container from "@mui/material/Container";

export const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          pt: 2,
          bgcolor: "grey.700",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: {
            xs: "center",
            lg: "unset",
          },
        }}
      >
        <Container>
          <Typography
            color="grey.300"
            component="p"
            variant="body2"
            gutterBottom={false}
            align="center"
          >
            Please connect or follow me in a professional capacity with the
            following social links
          </Typography>
          <Box
            component="nav"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              marginRight: "auto",
              width: "100%",
            }}
          >
            <Foreach
              items={socialData}
              factory={(x, i) => <Social key={i} {...x} />}
            />
          </Box>
          <Typography
            color="grey.300"
            component="p"
            variant="caption"
            gutterBottom={false}
            align="center"
          >
            &copy; 2018 Ross Knudsen
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};

const Social = (props: ISocialProps): JSX.Element => {
  let Component;
  switch (props.type) {
    case SocialOptions.github:
      Component = GitHub;
      break;

    case SocialOptions.linkedin:
      Component = LinkedIn;
      break;

    default:
      throw new Error();
  }

  return (
    <Link
      href={props.link}
      sx={{
        m: 3,
      }}
    >
      <Component fontSize="large" sx={{ color: "primary.light" }} />
    </Link>
  );
};
