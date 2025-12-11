import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import LobbyPage from "./pages/LobbyPage/LobbyPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage";
import ProtectedRoute from "./router/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/lobby" element={<ProtectedRoute><LobbyPage /></ProtectedRoute>}>

          <Route index element={<Navigate to="restaurant" />} />
          <Route path="restaurant" element={<RestaurantPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
