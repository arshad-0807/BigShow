import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { menusRoutes } from "../src/Components/menus";
import React from "react";
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
