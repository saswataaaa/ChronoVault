function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-14 py-6">

        {/* Logo */}
        <h1 className="text-4xl font-extrabold tracking-tight">
          <span className="text-purple-400">⏳</span>{" "}
          <span className="text-white">Chrono</span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
            Vault
          </span>
        </h1>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-14 text-lg text-gray-300 font-medium">
          <a href="#" className="hover:text-white duration-300">
            Features
          </a>

          <a href="#" className="hover:text-white duration-300">
            Pricing
          </a>

          <a href="#" className="hover:text-white duration-300">
            About
          </a>

          <a href="#" className="hover:text-white duration-300">
            How It Works
          </a>
        </div>

        {/* Login */}
        <button className="px-9 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white font-semibold shadow-[0_0_30px_rgba(168,85,247,.45)] hover:scale-105 duration-300">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;