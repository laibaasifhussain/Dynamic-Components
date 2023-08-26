import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Table from "./components/Table";
import Card from "./components/Card";
import Select from "./components/Select";

function App() {
  // BUTTON COMPONENTS

  const [counter, setCounter] = useState(0);
  const changebtn = () => {
    setCounter((prev) => prev + 1);
  };

  // CARD COMPONENETS

  let cardObj = [
    {
      id: 1,
      name: "ABC",
      age: 18,
      institute: "SAIMS",
      isActive: true,
    },
    {
      id: 2,
      name: "XYZ",
      age: 48,
      institute: "SAIMS",
      isActive: false,
    },
    {
      id: 3,
      name: "MNO",
      age: 20,
      institute: "SAIMS",
      isActive: true,
    },
    {
      id: 4,
      name: "JKL",
      age: 8,
      institute: "SAIMS",
      isActive: false,
    },
    {
      id: 5,
      name: "OPQ",
      age: 28,
      institute: "SAIMS",
      isActive: true,
    },
  ];

  // TABLE COMPONENTS
  const data = [
    {
      id: 1,
      name: "Ammad",
      course: "Hyrbrid Development",
      enrolled: true,
    },
    {
      id: 2,
      name: "Shahzaib",
      course: "Hyrbrid Development",
      enrolled: true,
    },
    {
      id: 3,
      name: "Hassan",
      course: "Hyrbrid Development",
      enrolled: true,
    },
    {
      id: 4,
      name: "Haris",
      course: "Hyrbrid Development",
      enrolled: false,
    },
    {
      id: 5,
      name: "Shahmeer",
      course: "Hyrbrid Development",
      enrolled: false,
    },
  ];

  return (
    <div className="text-center container mt-3">
      <div className="border border-4 p-4">
        <h2>INPUT COMPONENT</h2>
        <Input
          inpType="password"
          placeHolder="Enter Password"
          label="PASSWORD: "
        />
      </div>

      <div className="border border-4 my-3 p-4">
        <h2>SELECT COMPONENT</h2>
        <Select
          getValue={(e: string) => {
            console.log(e);
          }}
          label="GENDER"
          options={[
            { displayName: "Select" },
            {
              value: "male",
              displayName: "Male",
            },
            {
              value: "female",
              displayName: "Female",
            },
          ]}
        />
      </div>

      <div className="border border-4 my-3 p-4">
        <h2>CARDS COMPONENT</h2>
        {cardObj.map((x, i) => (
          <Card
            key={i}
            id={x.id}
            age={x.age}
            name={x.name}
            institute={x.institute}
            isActive={x.isActive}
          />
        ))}
      </div>

      <div className="border border-4 my-3 p-4">
        <h2>BUTTON COMPONENT</h2>
        <p>Button Counter : {counter}</p>
        <Button btnText="CLICK HERE" clickFun={changebtn} />
      </div>

      <div className="border border-4 my-3 p-4">
        <h2>TABLE COMPONENT</h2>
        <Table
          label="TESTING TABLE"
          dataSource={data}
          cols={[
            {
              displayName: "Id",
              key: "id",
            },
            {
              displayName: "Name",
              key: "name",
            },
            {
              displayName: "Course",
              key: "course",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
