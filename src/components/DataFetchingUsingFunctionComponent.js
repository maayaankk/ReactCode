import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Can use loadash for mapong as well _.mapvalue()

  const arr = data.map((data, index) => {
    return (
      <div>
        <p>{data.id}</p>
        <p>{data.name}</p>
        <p>{data.username}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{arr}</h2>
    </div>
  );
}
