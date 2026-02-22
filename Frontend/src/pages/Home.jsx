import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <div className="bg-[#0a0a12] text-white">
      <Navbar />
      <Hero />
      <AboutUs />
    </div>
  );
}
export default Home;