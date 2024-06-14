import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import { Styles } from "../styles/styles";
import React from "react";
import { Spin } from "antd";

const Home = React.lazy(() => import("../pages/Home/"));
const DitZijnWij = React.lazy(() => import("../pages/DitZijnWij/"));
const ZienWeJeDan = React.lazy(() => import("../pages/ZienWeJeDan/"));
const Projecten = React.lazy(() => import("../pages/Projecten/"));
const Hoe = React.lazy(() => import("../pages/Hoe/"));
const Organisatie = React.lazy(() => import("../pages/Organisatie/"));

const Router = () => {
  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center pt-5">
          <Spin />
        </div>
      }
    >
      <Styles />
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/ditzijnwij" element={<DitZijnWij />} />
        <Route path="/zienwejedan" element={<ZienWeJeDan />} />
        <Route path="/projecten" element={<Projecten />} />
        <Route path="/hoe" element={<Hoe />} />
        <Route path="/organisatie" element={<Organisatie />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
