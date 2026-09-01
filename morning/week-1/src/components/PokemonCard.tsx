import React from "react";

type PokemonCardType = {
  name: string;
  url: string;
};

export const PokemonCard = ({ name, url }: { name: string; url: string }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{url}</h3>
    </div>
  );
};
