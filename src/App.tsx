import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import clsx from "clsx";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={clsx("app", theme)}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Go to main page</Link>
      <Link to="/about">Go to about page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
