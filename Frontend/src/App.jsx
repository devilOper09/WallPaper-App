import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wallpapers from "./pages/Wallpapers";
import ImagePage from "./pages/ImagePage";



function App() {
  return (<BrowserRouter>

      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/wallpapers" element={<Wallpapers />} />
        <Route path="/wallpapers/:id" element={<ImagePage/>}/>

      </Routes>
    
  </BrowserRouter>
  );
}

export default App;