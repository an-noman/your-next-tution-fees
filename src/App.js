import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/#01_LandingPage/LandingPage";
import SelectionPage from "./Components/#02_SelectionPage/SelectionPage";
import YoutubeVideo from "./Components/#03_YoutubeVideo/YoutubeVideo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/selection" element={<SelectionPage/>}/>
        <Route path="/youtube" element={<YoutubeVideo/>}/>
      </Routes>
    </>
  );
}

export default App;
