function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-white">
          ⏳ ChronoVault
        </h1>

        <div className="flex gap-10 text-gray-300">

          <a href="#" className="hover:text-purple-400 duration-300">
            Features
          </a>

          <a href="#" className="hover:text-purple-400 duration-300">
            Pricing
          </a>

          <a href="#" className="hover:text-purple-400 duration-300">
            About
          </a>

        </div>

        <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-xl hover:scale-105 duration-300">
          Login
        </button>

      </div>

    </nav>
  );
}

export default Navbar;