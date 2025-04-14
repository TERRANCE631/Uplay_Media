import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Home/HomePage";
import { UserDetails, VideoPlayer } from "../Pages";

export function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/videoPlayer" element={<VideoPlayer />}></Route>
        <Route path="/Home/User/profile/" element={<UserDetails />}></Route>
      </Routes>
    </>
  );
}
