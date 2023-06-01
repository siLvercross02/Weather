import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
} from "react-router-dom";
import Root from "./components/Layout/Root";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Weather from "./pages/Weather";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Login />} />
      <Route path="/welcome" element={<Landing />} />
      <Route path="/weather" element={<Weather />} />
    </Route>
  )
);
