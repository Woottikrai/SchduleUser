import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IRoute from "./models/IRoute";
import Signin from "./pages/signin";
import Layout from "./components/layouts";
import Home from "./pages/home";
import UserList from "./pages/userList";
import Booking from "./pages/booking";
import ErrorPage from "./pages/errorPage";
import Date from "./pages/signin";

import CreateUser from "./pages/createUser";
import EditUser from "./pages/editUser";

function App() {
  const routes: Array<IRoute> = [
    { path: "/", element: <Home /> },
    { path: "/Signin", element: <Signin /> },
    { path: "/UserList", element: <UserList /> },
    { path: "/CreateUser", element: <CreateUser /> },
    { path: "/userList/:id/EditUser", element: <EditUser /> },
    { path: "/Booking", element: <Booking /> },
    { path: "/*", element: <ErrorPage /> },
  ];
  return (
    <div className="">
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map(({ path, element }) => {
              return <Route path={path} element={element} key={path} />;
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
