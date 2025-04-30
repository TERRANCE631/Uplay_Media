import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Home/HomePage";
import { SearchResultsPage, UserDetails, VideoPlayer } from "../Pages";

export function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/videoPlayer/:id" element={<VideoPlayer />}></Route>
        <Route path="/Home/User/profile/:id" element={<UserDetails />}></Route>
        <Route path="/Home/search results/" element={<SearchResultsPage />}></Route>
      </Routes>
    </>
  );
}
