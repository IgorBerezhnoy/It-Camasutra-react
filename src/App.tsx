import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <AppTitle />
      <Ratinng />
      <Accordion />
    </div>
  );
}
function AppTitle() {
  return <> This IS is APP component </>;
}
function Star() {
  return <div>*</div>;
}

function Ratinng() {
  return (
    <>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </>
  );
}
function AccordionTitle() {
  return (
    <>
      <h3>Меню</h3>
    </>
  );
}
function AccordionBody() {
  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
}
function Accordion() {
  return (
    <>
      <AccordionTitle />
      <AccordionBody />
    </>
  );
}
export default App;
