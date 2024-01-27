import React from "react";
import { Container } from "./components/componentStyled";
import { Route, Routes } from "react-router";
import Home from "./components/home/Home";
import { Toaster } from "react-hot-toast"
import Auth from "./page/Auth/Auth"

const App = () => {
  return (
   <>
     <Toaster/>

    <Container>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/auth"} element={<Auth />} />
      </Routes>
    </Container>
   </>
  );
};

export default App;
