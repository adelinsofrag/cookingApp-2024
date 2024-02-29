import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { HomePage } from "./pages/HomePage";
import { MealPage } from "./pages/MealPage";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/meals/:mealID" element={<MealPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
