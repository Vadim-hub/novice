import React from "react";
import "./App-style.css";
import Header from "../header/Header";
import Title from "../title/Title";
import Fields from "../fields/Fields";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <Fields />
      </div>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Fields />
    </div>
  );
} */

export default App;
