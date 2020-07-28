import React, { Component } from "react";

// импортируем новое расширение: явно указываем что работаем со страницами в браузере, а не в мобильном приложении (как в случае с React Native)
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import ErrorBoundry from "../error-boundry/error-boundry";
import { SwapiServiceProvider } from "../../context";
import TestService from "../../services/test-service";
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import StarshipsPage from "../pages/starships-page";
import PersonPage from "../pages/person-page";
import UsersPage from "../pages/users-page";

import "./app.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      {<span>{item[field]}</span>}
      {/*  {<span>{field}</span>} */}
    </li>
  );
};

export default class App extends Component {
  swapiService = new SwapiService();
  testService = new TestService();

  state = {
    showRandomPlanet: true,
    error: false,
    selectedItem: null,
    selectedPlanet: null,
    selectedStarship: null,
    isLoggedIn: true, // state для работы со скрытой страницей
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
    const { getPersonImage, getPerson } = this.swapiService;
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
          {/* все страницы приложения указываются в Router и для каждой Route */}
          <Router>
            <Header />
            {/* Switch работает поэтапно: проверяет каждый путь, если не находит путя, то выводит ошибку. страница которая не найдена (например Error 404) */}
            <Switch>
              {/* возвращающая функция возвращает тэг h1 ("/" - это ссылка на главную страницу) (параметр exact - элемент будет отображаться только на данной странице (exact точно проверяем путь - только данная компонента)) */}
              <Route path="/" render={() => <h1>Welcome</h1>} exact />{" "}
              {/* создадим компоненту которая отображает данные об элементе - ссылка на people и передаем значение индификатора (айдишник) */}
              <Route path="/people/:id" component={PersonPage} />
              {/* Route - указывает на путь path и компонент component который отображаем по ссылке */}
              <Route path="/people" component={PeoplePage} exact />
              {/* знак ? - это опциональный параметр (параметр который необязательно должен использоваться) - используется чтобы настроить работу с элементами из списка которые выбираем */}
              <Route path="/planets/:id?" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} exact />
              <Route path="/users" component={UsersPage} exact />
              <Route render={() => <h1>Page not found!</h1>} exact />
            </Switch>
          </Router>
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
          {/*     <Row left={peopleItem} right={persoDetails} />
          <Row left={planetList} right={planetDetails} /> */}
          {/* <PeoplePage /> */}
        </div>
      </SwapiServiceProvider>
    );
  }
}

export { Record };
