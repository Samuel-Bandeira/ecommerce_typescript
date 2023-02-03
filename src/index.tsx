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
import Payment from "./pages/Payment";
import AddPaymentForm from "./pages/AddPaymentForm";

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
    element: <Home />,
  },
  { path: "/basket", element: <Basket /> },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "checkout",
        element: <Payment />,
      },
      {
        path: "payment",
        children: [
          {
            path: "add",
            element: <AddPaymentForm />,
          },
        ],
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
