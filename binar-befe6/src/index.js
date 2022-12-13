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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<App />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/history" element={<History />} />
            <Route path="/guestDetails" element={<GuestDetails />} />
            <Route path="/login" element={<LoginRegist />} />
            <Route path="/setSeat" element={<SetSeat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
