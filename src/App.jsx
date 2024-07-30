import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import MoviesPage from "./Components/MoviesPage";
import { menusRoutes } from "../src/Components/menus";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <>
      <div id="main">
        <Router>
          <Routes>
            {menusRoutes.map((route, index) => {
              const Layout = route.layout || React.Fragment; // Default to React.Fragment if no layout is specified
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<Layout>{route.element}</Layout>}
                />
              );
            })}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
