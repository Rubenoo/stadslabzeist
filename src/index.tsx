import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";
import { ConfigProvider } from 'antd';
import nlNL from 'antd/lib/locale/nl_NL';

import Router from "./router";
import i18n from "./translation";

const App = () => (
  <ConfigProvider locale={nlNL}>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Router />
      </I18nextProvider>
    </BrowserRouter>
  </ConfigProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));