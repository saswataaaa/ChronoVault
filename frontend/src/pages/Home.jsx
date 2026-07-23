import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="min-h-screen bg-[#09090F] relative overflow-hidden">

      {/* Purple Glow */}
      <div className="absolute w-[700px] h-[700px] bg-purple-700 rounded-full blur-[180px] opacity-20 -top-40 -left-40"></div>

      {/* Pink Glow */}
      <div className="absolute w-[500px] h-[500px] bg-pink-600 rounded-full blur-[180px] opacity-20 bottom-0 right-0"></div>

      <Navbar />
      <Hero />

    </div>
  );
}

export default Home;