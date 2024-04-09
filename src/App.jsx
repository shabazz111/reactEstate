import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/layout/Layout";
import Homepage from "./routes/homepage/Homepage";
import ListPage from "./routes/listPage/ListPage";
import Login from "./routes/login/Login";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Register from "./routes/register/Register";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: ":id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
