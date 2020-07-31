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

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
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

/*const App = () => {*/
//const name = "Peter";
//const age = 10;
//return (
////[
//<>
//<h1>Greetings</h1>
//<Hello name="Maya" age={26 + 10} />
//<Hello name={name} age={age} />
//<Footer />
//</>
////];
//);
/*};*/
const App = (props) => {
  const { counter } = props;
  return <div>{counter}</div>;
};
let counter = 1;
ReactDOM.render(<App counter={counter} />, document.getElementById("root"));
