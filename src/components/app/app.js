import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list/item-list";
import PlanetList from "../planet-list/planet-list";
import PersonDetails from "../person-details/person-details";
import PlanetDetails from "../planet-details/planet-details";

import "./app.css";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    error: false,
    selectedItem: null, // поле - индификатор (айдишник) элемента на который нажали (по умолчанию null - то есть невыбран). Поле отвечает за элемент на который нажали - возвращает айдишник (связующее звено для дальнейших действий с элементом)
    selectedPlanet: null,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  // добавим обработчик ошибки
  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  // добавим обработчик который будет выводить индификатор (айдишник) при нажатии на элемент
  onSelectedItem = (id) => {
    this.setState({
      selectedItem: id,
    });
    console.log(id);
  };

  onSelectedPlanet = (id) => {
    this.setState({
      selectedPlanet: id,
    });
    console.log(id);
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    if (this.state.error) {
      return <ErrorIndicator />;
    }

    return (
      <div className="stardb-app">
        <Header />
        {planet}

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onSelectedItem={this.onSelectedItem} />
          </div>
          <div className="col-md-6">
            <PlanetList onSelectedPlanet={this.onSelectedPlanet} />
          </div>
          <div className="col-md-6">
            {/* прокидываем в компоненту PersonDetails пропс selectedItem (значение состояния на которое изменилось (текущее)) */}
            <PersonDetails selectedItem={this.state.selectedItem} />
          </div>
          <div className="col-md-6">
            {/* прокидываем в компоненту PersonDetails пропс selectedItem (значение состояния на которое изменилось (текущее)) */}
            <PlanetDetails selectedPlanet={this.state.selectedPlanet} />
          </div>
        </div>
      </div>
    );
  }
}
