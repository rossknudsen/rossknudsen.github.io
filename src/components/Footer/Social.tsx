import * as React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { ISocialProps, SocialOptions } from "../../data/Social";
import Link from "@mui/material/Link";

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
    <Link href={props.link}>
      <Component />
    </Link>
  );
};

export { Social };
