import React, { useEffect, useState } from "react";
import axios from "axios";
import WallpaperCard from "./WallpaperCard";

const BASE_URL = "http://localhost:3000";

function WallpaperGrid() {
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
    <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
      {wallpapers.map((wallpaper) => (
  <WallpaperCard key={wallpaper.id} wallpaper={wallpaper} />
))}
    </div>
  );
}

export default WallpaperGrid;