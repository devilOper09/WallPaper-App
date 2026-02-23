import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import WallpaperGrid from "../components/WallpaperGrid";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Flag } from "lucide-react";


function ImagePage() {
    const [expanded, setExpanded] = useState(false);
  const { id } = useParams();              
  const [wallpaper, setWallpaper] = useState(null);  
  const BASE_URL = "http://localhost:3000";


  useEffect(() => {
    const fetchWallpaper = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/public/wallpaper/${id}`
        );
        setWallpaper(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWallpaper();
  }, [id]);  

//   useEffect(()=>{
//     window.scrollTo({
//         top:0,
//         behavior:"smooth"
//     });
//   },[id])


 
  if (!wallpaper) {
    return (
      <div className="text-white pt-24 text-center">
        Loading...
      </div>
    );
  }
  const imageUrl = wallpaper.image_url.startsWith("http")
  ? wallpaper.image_url
  : `${BASE_URL}${wallpaper.image_url}`;

  const handleDownload = async () => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = wallpaper.name + ".jpg";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="bg-[#0a0a12] min-h-screen text-white">
      <Navbar />

      <div className="pt-24 pb-3 px-6 max-w-6xl mx-auto">

        <img
          src={`${BASE_URL}${wallpaper.image_url}`}
          alt={wallpaper.name}
          className="w-full max-h-[80vh] object-contain rounded-2xl"
        />
<button
  onClick={handleDownload}
  className="mt-4 hover:bg-purple-500 transition p-2 rounded-full"
>
  <Download className="opacity-40 hover:opacity-100 transition" size={50}/>
</button>



        <h1 className="text-3xl font-bold mt-8">
          {wallpaper.name}
        </h1>

<motion.p
  layout
  className="text-gray-400 mt-4"
>
  {expanded
    ? wallpaper.description
    : wallpaper.description.slice(0, 150) + (wallpaper.description.length > 150 ? "..." : "")
  }
</motion.p>

{wallpaper.description.length > 150 && (
  <button
    onClick={() => setExpanded(!expanded)}
    className="text-purple-500 mt-2 hover:underline"
  >
    {expanded ? "Show Less" : "Show More"}
  </button>
)}

      </div>
      <WallpaperGrid excludeId={id}/>
      
      <AboutUs />
      
    </div>
    
  );
}

export default ImagePage;