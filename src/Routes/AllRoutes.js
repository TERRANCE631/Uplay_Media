import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Home/HomePage";

export function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}
