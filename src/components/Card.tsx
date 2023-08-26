import React from "react";

type cardProps = {
  id: number;
  name: string;
  age: number;
  institute: string;
  isActive: boolean;
};

const Card = (props: cardProps) => {
  const { id, name, age, institute, isActive } = props;
  return (
    <div className="d-inline-block p-3 border border-3 m-2 shadow px-5">
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>institute: {institute}</p>
      <p>isActive : {isActive ? "YES" : "NO"}</p>
    </div>
  );
};

export default Card;
