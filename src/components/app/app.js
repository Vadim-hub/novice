import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
//import ItemList from "../item-list/item-list";
import {
  PersonList,
  PersonDetails,
  PlanetList,
  PlanetDetails,
  StarshipList,
  StarshipDetails,
} from "../sw-components";
//import PersonDetails from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import { SwapiServiceProvider } from "../../context";
import TestService from "../../services/test-service";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();
  testService = new TestService();

  state = {
    showRandomPlanet: true,
    error: false,
    selectedItem: null,
    selectedPlanet: null,
    selectedStarship: null,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  onSelectedItem = (id) => {
    this.setState({
      selectedItem: id,
    });
    /* console.log(numb); */
  };

  onSelectedPlanet = (id) => {
    this.setState({
      selectedPlanet: id,
    });
  };

  onSelectedStarship = (id) => {
    this.setState({
      selectedStarship: id,
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const { selectedItem, selectedPlanet, selectedStarship } = this.state;
    const peopleItem = <PersonList onSelectedItem={this.onSelectedItem} />;
    const planetList = <PlanetList onSelectedItem={this.onSelectedPlanet} />;
    const starshipList = (
      <StarshipList onSelectedItem={this.onSelectedStarship} />
    );
    const persoDetails = <PersonDetails selectedItem={selectedItem} />;
    const planetDetails = <PlanetDetails selectedItem={selectedPlanet} />;
    const starshipDetails = <StarshipDetails selectedItem={selectedStarship} />;

    if (this.state.error) {
      return <ErrorIndicator />;
    }

    return (
      <SwapiServiceProvider value={this.swapiService}>
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

          <Row left={peopleItem} right={persoDetails} />
          <Row left={planetList} right={planetDetails} />
          <Row left={starshipList} right={starshipDetails} />
        </div>
      </SwapiServiceProvider>
    );
  }
}
