import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import { Styles } from "../styles/styles";
import React from "react";
import { Spin } from "antd";

const Home          = React.lazy(() => import('../pages/Home/'));
const DitZijnWij    = React.lazy(() => import('../pages/DitZijnWij/'));
const ZienWeJeDan   = React.lazy(() => import('../pages/ZienWeJeDan/'));
const Projecten     = React.lazy(() => import('../pages/Projecten/'));
const Hoe           = React.lazy(() => import('../pages/Hoe/'));


const Router = () => {
  return (
    <Suspense fallback={
        <div className="d-flex justify-content-center pt-5">
          <Spin/>
        </div>}>
      <Styles />
      <Header />
      <Routes>
        <Route path="/stadslabzeist/" element={<Home/>} />
        <Route path="/stadslabzeist/ditzijnwij" element={<DitZijnWij/>} />
        <Route path="/stadslabzeist/zienwejedan" element={<ZienWeJeDan/>} />
        <Route path="/stadslabzeist/projecten" element={<Projecten/>} />
        <Route path="/stadslabzeist/hoe" element={<Hoe/>} />
      </Routes>
    </Suspense>
  );
};

export default Router;
