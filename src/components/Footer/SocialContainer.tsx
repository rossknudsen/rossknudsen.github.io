import * as React from "react";
import { socialData } from "../../data/Social";
import { Social } from "./Social";

const SocialContainer = () => (
  <>
    {socialData.map((s, i) => (
      <Social key={i} {...s} />
    ))}
  </>
);

export { SocialContainer };
