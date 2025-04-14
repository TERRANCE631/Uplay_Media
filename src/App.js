import { useState } from "react";
import { Header, SideManu } from "./Layout";
import { SlideIn } from "./Layout/SlideIn";
import { AllRoutes } from "./Routes/AllRoutes";
import { CreatePost } from "./Pages";

function App() {
  const [showManu, setShowManu] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);

  return (
    <div className="dark:bg-gray-700 min-h-screen overflow-hidden">
      <Header setShowManu={setShowManu} />
      <SideManu showCreatePost={showCreatePost} setShowCreatePost={setShowCreatePost}/>
      {showCreatePost && <CreatePost />}
      {showManu && <SlideIn setShowManu={setShowManu} setShowCreatePost={setShowCreatePost} />}
      <main className="min-h-screen md:pt-[5.2rem] pt-[5rem] xl:pl-[4rem] md:pl-[8%] lg:pl-[6%] dark:text-white text-black">
        <AllRoutes />
      </main>
    </div>
  );
}

export default App;
