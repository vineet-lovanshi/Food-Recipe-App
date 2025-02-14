import { useState } from "react";

import "./App.css";
import MainPage from "./components/Mainpage";
import { Route, Routes } from "react-router-dom";
import MealInfo from "./components/Mealinfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <MainPage /> */}
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/:mealid" element={<MealInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
