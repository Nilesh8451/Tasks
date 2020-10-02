import React from "react";
import "./Lists.css";
function Lists() {
  //   const names = ["Nilesh", "Omkar", "Anirudh"];
  const persons = [
    {
      id: 1,
      name: "Nilesh",
      age: 30,
      skills: "React",
    },
    {
      id: 2,
      name: "Akash",
      age: 31,
      skills: "React",
    },
    {
      id: 3,
      name: "Suryakant",
      age: 32,
      skills: "React",
    },
    {
      id: 4,
      name: "Devashree",
      age: 29,
      skills: "React",
    },
  ];
  return (
    <div>
      {/* {names.map((name,idx) => {
        return <h2 key={idx}>{name}</h2>;
      })} */}

      {persons.map((person) => {
        return (
          <div key={person.id} className="lists_div">
            <h2>My Name is {person.name}</h2>
            <p>My Skill is {person.skills}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Lists;
