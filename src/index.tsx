import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import nlNL from "antd/lib/locale/nl_NL";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import Router from "./router";

const App = () => (
  <ConfigProvider locale={nlNL}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ConfigProvider>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

serviceWorkerRegistration.register();

root.render(<App />);
