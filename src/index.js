import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Files from "./pages/Files";
import SignIn from "./pages/SignIn";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SignUp from "./pages/SignUp";
import { createTheme, ThemeProvider } from "@mui/material";
import { purple, red, teal } from "@mui/material/colors";
import EditPage from "./pages/EditPage";
import CreatePage from "./pages/CreatePage";
import AdminPage from "./pages/AdminPage";
import DeletePage from "./pages/DeletePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "files/",
        element: <Files />,
      },
      {
        path: "admin/",
        element: <AdminPage />,
      },
      {
        path: "admin/files",
        element: <AdminPage />,
      },
      {
        path: "edit/:file_id",
        element: <EditPage />,
      },
      {
        path: "delete/:file_id",
        element: <DeletePage />,
      },
      {
        path: "create/",
        element: <CreatePage />,
      },
      {
        path: "signin/",
        element: <SignIn />,
      },
      {
        path: "signup/",
        element: <SignUp />,
      },
    ],
  },
]);
const defaultTheme = createTheme({
  palette: {
    primary: purple,
    secondary: purple,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
