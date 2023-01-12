import { lazy, Suspense, useState } from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import Work from "./pages/Work";
const Login = lazy(() => import("./pages/Login"));
// const Work = lazy(() =>
//   import("./pages/Work").then((module) => {
//     return { default: module.Work };
//   })
// );

function App() {
  const [is_login, setIs_Login] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/work" element={<Work is_login={is_login} />} />
      </Route>
    </Routes>
  );
}

function NavBar() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/work">Work</NavLink>
      </nav>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export default App;
