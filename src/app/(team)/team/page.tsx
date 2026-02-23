import React from "react";
import { Metadata } from "next";
import TeamMain from "@/pages/team/team";

export const metadata: Metadata = {
  title: "Our Team - Vert Idee | Meet the Creatives",
};

const TeamPage = () => {
  return (
    <TeamMain/>
  );
};

export default TeamPage;
