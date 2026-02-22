import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-purple-500">DoodleDrop</Link>

        <div className="flex gap-6 text-gray-300">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/wallpapers" className="hover:text-white transition">Wallpapers</Link>
        </div>
      </div>
    </nav>
  );
}