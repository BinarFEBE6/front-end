import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "antd/dist/reset.css";
import Schedule from "./pages/Schedule";
import Profile from "./pages/Profile";
import History from "./pages/History";
import GuestDetails from "./pages/GuestDetails";
import SetSeat from "./pages/SetSeat";
import LoginRegist from "./pages/LoginRegist";
import AdminPage from "./pages/adminPage";
import Detail from "./pages/Detail";
import Details from "./pages/Details";
import Confirmation from "./pages/Confirmation";
import NoMatch from "./pages/NoMatch";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="401367495879-elge7c4v2d6v6sc4p85rmpa79fugdo71.apps.googleusercontent.com">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<App />} />
              <Route path="/Detail/:id" element={<Detail />} />
              <Route
                path="/schedule/:departure/:arrival"
                element={<Schedule />}
              />
              <Route path="/profile/:name/:addr/:bd" element={<Profile />} />
              <Route path="/history" element={<History />} />
              <Route path="/guestDetails" element={<GuestDetails />} />
              <Route path="/login" element={<LoginRegist />} />
              <Route path="/setSeat" element={<SetSeat />} />
              <Route path="/dashboard" element={<AdminPage />} />
              <Route path="/details/:guestId" element={<Details />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
