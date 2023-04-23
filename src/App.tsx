import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Ratinng from "./components/Rating/Rating";

function App() {
  return (
    <div>
      {/* <PageTitle title={"This IS is APP component"} />
      <PageTitle title={"My friends"} />
      Article 1
      <Ratinng value={4} />
      <Accordion titleValue={"Menu"} />
      <Accordion titlevalue={"Users"} />
      Article 2 */}
      <Ratinng value={0} />
      <Ratinng value={1} />
      <Ratinng value={"dsf"} />
      <Ratinng value={3} />
      <Ratinng value={4} />
      <Ratinng value={5} />
    </div>
  );
}
function PageTitle(props: any) {
  return <h1>{props.title} </h1>;
}

export default App;
