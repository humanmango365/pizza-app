import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { fetchPizzas } from "./store/reducers";

const App: FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

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

export default App;
