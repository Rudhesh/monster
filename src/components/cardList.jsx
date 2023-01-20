import React from "react";
import Card from "./card";

export default function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        console.log(monster);
        return <Card monster={monster} />;
      })}
    </div>
  );
}
