import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Home/HomePage";
import { VideoPlayer } from "../Pages";

export function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/videoPlayer" element={<VideoPlayer />}></Route>
      </Routes>
    </>
  );
}
