import React, { FC } from "react";
import { connect } from "react-redux";
import Categories from "../components/Categories/Categories";
import PizzaList from "../components/pizzaList/PizzaList";
import Sort from "../components/Sort/Sort";
import { StoreType } from "../store/store";
import { IPizzaItem } from "../types";

const Home: FC<{pizzas: IPizzaItem[]}> = ({pizzas}) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => alert(name)}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {pizzas ? <PizzaList /> : <h2>Error</h2>}
    </div>
  );
};

const mapStateToProps = (state: StoreType) => ({
  pizzas: state.pizzasStore.pizzas
})

export default connect(mapStateToProps)(Home);
