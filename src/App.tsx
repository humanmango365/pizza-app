import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { fetchPizzas } from "./store/reducers";
import { StoreType } from "./store/store";
import { IPizzaItem } from "./types";

interface IApp {
  pizzas: IPizzaItem[] | null;
  getPizzas: () => void;
}

const App: FC<IApp> = ({ pizzas, getPizzas }) => {
  useEffect(() => {
    getPizzas();
  }, [getPizzas]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: StoreType) => ({
  pizzas: state.pizzasStore.pizzas,
});

const mapDispatchToProps = (dispatch: any) => ({
  getPizzas: () => {
    dispatch(fetchPizzas());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
