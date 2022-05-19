import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import Product from "./components/Product";
import NavMenu from "./components/NavMenu";
import Profile from "./components/Profile";

const AppEl = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Pages = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

function App() {
  return (
    <BrowserRouter>
      <AppEl>
        <Pages>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/store" element={<Store />} />
            <Route exact path="/products" element={<Product />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </Pages>
        <NavMenu />
      </AppEl>
    </BrowserRouter>
  );
}

export default App;
