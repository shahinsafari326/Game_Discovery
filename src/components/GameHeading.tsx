import React from "react";
import type { GameQuery } from "../App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platformId ? "Games" : "No platform"}`;

  return <div>{heading}</div>;
};

export default GameHeading;
