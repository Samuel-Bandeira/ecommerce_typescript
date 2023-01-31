import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import store from "./redux/store";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import Root from "./routes/Root";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: <Navbar />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
