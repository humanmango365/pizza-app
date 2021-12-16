import React, { FC } from "react";
import { useSelector } from "react-redux";
import Categories from "../components/Categories/Categories";
import PizzaList from "../components/pizzaList/PizzaList";
import Sort from "../components/Sort/Sort";
import { StoreType } from "../store/store";

const Home: FC = () => {

  const pizzas  = useSelector(({ pizzasStore}: StoreType) => pizzasStore.pizzas)

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {pizzas ? <PizzaList /> : <h2>Error</h2>}
    </div>
  );
};

export default Home;