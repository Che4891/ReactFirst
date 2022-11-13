import React from "react";
import "./App.css";
import Props from "./components/props/props";
import Counter from "./components/countert/counter"

//создание компонента с помощью функуий

const Header = () => {
  return <h2>This is my header</h2>;
};

const Field = () => {
  const holder = "Sone text";
  const styledFild = {
    width: "300px",
    border: "1px solid red",
  };
  return <input placeholder={holder} type="text" style={styledFild} />;
};

const Btn = () => {
  const text = "Log in";
  const logged = true;

  return <button>{logged ? "Enter" : text}</button>;
};

//создание компонента с помощью классов

class Title extends React.Component {
  render() {
    const styles = {
      color: "blue",
      background: "yellow",
      width: "fit-content",
      margin: "auto",
      padding: "10px"
    };
    const text = "My Component";

    return <h3 style={styles}>{text}</h3>;
  }
}

function App() {
  return (
    <div className="App">
      <Title />
      <Header />
      <Field />
      <Btn />
      <Props />
      <Counter counter={0}/>
    </div>
  );
}

export default App;
