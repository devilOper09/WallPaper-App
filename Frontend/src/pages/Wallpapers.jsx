import Navbar from "../components/Navbar";
import WallpaperGrid from "../components/WallpaperGrid";
import AboutUs from "../components/AboutUs";

function Wallpapers() {
  return (
    <div className="bg-[#0a0a12] min-h-screen text-white">
        <Navbar />
        <div className="pt-24 px-6">
            <WallpaperGrid />

        </div>

    </div>
    
  )
}

export default Wallpapers