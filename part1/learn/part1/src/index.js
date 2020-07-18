import React from "react";
import ReactDOM from "react-dom";

/*const App = () => {*/
//const now = new Date();
//const a = 10;
//const b = 20;
//console.log("hello from component");
//return (
//<div>
//<p>Hello world, it is now {now.toString()}</p>
//<p>
//{a} plus {b} is {a + b}
//</p>
//</div>
//);
/*}*/

/*const App = () => {*/
//const now = new Date();
//const a = 10;
//const b = 20;
//return React.createElement(
//"div",
//null,
//React.createElement("p", null, "Hello world, it is ", now.toString()),
//React.createElement("p", null, a, " plus ", b, " is ", a + b)
//);
/*}*/

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;
  return (
    //[
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
    //];
  );
};

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("root")
);
