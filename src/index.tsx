import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import common_fr from "translations/fr/common.json";
import common_en from "translations/en/common.json";
import { getLanguagePreference } from "helpers/global";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "store/store";
import "./index.css";
import App from "./App";
const selectedLanguage = getLanguagePreference();
i18next.init({
  interpolation: { escapeValue: false },
  lng: selectedLanguage,
  resources: {
    en: {
      common: common_en,
    },
    fr: {
      common: common_fr,
    },
  },
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <I18nextProvider i18n={i18next}>
      {/* component makes the Redux store available to any nested components that need to access the Redux store */}
      <Provider store={store}>
        {/* persist our data on refresh */}
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  </>
);
