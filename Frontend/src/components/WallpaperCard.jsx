import { motion } from "framer-motion";
import { useState } from "react";
import {Link} from "react-router-dom"

const WallpaperCard = ({ wallpaper }) => {
  const [loaded, setLoaded] = useState(false);
  const BASE_URL = "http://localhost:3000";

  return (

    <Link to={`/wallpapers/${wallpaper.id}`}>
    <motion.img
      src={`${BASE_URL}${wallpaper.image_url}`}
      alt={wallpaper.name}
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      onLoad={() => setLoaded(true)}
      className="w-full rounded-xl mb-6"
    />
    </Link>

    
  );
};

export default WallpaperCard;