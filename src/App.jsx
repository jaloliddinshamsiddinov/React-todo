import React from "react";
import { Card } from "./components/card";
import { Form } from "./components/form";

function App() {
  const [data, setData] = React.useState([])

  return (
    <>
      <Form setData={setData} />
      {data.map((item) => <Card setData={setData} key={item.id} {...item} />)}
    </>
  );
}
export default App