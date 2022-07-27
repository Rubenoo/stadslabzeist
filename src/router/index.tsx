import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import { Styles } from "../styles/styles";
import React from "react";
import { Spin } from "antd";

const Home          = React.lazy(() => import('../pages/Home/'));
const DitZijnWij    = React.lazy(() => import('../pages/DitZijnWij/'));
const ZienWeJeDan   = React.lazy(() => import('../pages/ZienWeJeDan/'));


const Router = () => {
  return (
    <Suspense fallback={
        <div className="d-flex justify-content-center pt-5">
          <Spin/>
        </div>}>
      <Styles />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ditzijnwij" element={<DitZijnWij/>} />
        <Route path="/zienwejedan" element={<ZienWeJeDan/>} />
      </Routes>
    </Suspense>
  );
};

export default Router;
