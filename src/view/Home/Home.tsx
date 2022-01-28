import React from "react";
import { Home1 } from "../../components/Home/Home1";
import { Home2 } from "../../components/Home/Home2";
import { SocialLink } from "../../components/Home/SocialLink";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Home1 />
      <Home2 />
      <SocialLink />
    </>
  );
};
