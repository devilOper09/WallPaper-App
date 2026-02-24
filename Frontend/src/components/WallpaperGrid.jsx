import React, { useEffect, useState } from "react";
import axios from "axios";
import WallpaperCard from "./WallpaperCard";

const BASE_URL = "https://your-backend-name.onrender.com";

function WallpaperGrid({excludeId}) {
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    const fetchWallpaper = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/public/wallpaper`
        );

        setWallpapers(res.data.data); 
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchWallpaper();
  }, []);


  return (
    <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-5 ml-2 mr-2">
      {wallpapers
  .filter((wallpaper) => wallpaper.id !== Number(excludeId))
  .map((wallpaper) => (
  <WallpaperCard key={wallpaper.id} wallpaper={wallpaper} />
))}
    </div>
  );
}

export default WallpaperGrid;