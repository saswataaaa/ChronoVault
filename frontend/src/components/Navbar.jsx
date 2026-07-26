function Navbar() {
  return (
   <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-3xl bg-black/30 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">

      <div className="max-w-[1500px] mx-auto flex justify-between items-center px-10 py-5">

        {/* Logo */}

        <a href="#home" className="text-4xl font-black tracking-tight">

          <span className="text-white">
            ⏳ Chrono
          </span>

          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
            Vault
          </span>

        </a>

        {/* Navigation */}

        <div className="hidden lg:flex items-center gap-10">

          <a
            href="#features"
            className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110"
          >
            Features
          </a>

          <a
            href="#how"
            className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110"
          >
            How It Works
          </a>

          <a
            href="#security"
            className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110"
          >
            Security
          </a>

          <a
            href="#faq"
            className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110"
          >
            FAQ
          </a>

        </div>

        {/* Buttons */}

        <div className="flex items-center gap-5">

          <a
            href="#create"
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:scale-105 hover:shadow-[0_0_35px_rgba(168,85,247,.5)] transition-all duration-300"
          >
            Create Capsule
          </a>

          <button
            className="px-7 py-3 rounded-xl border border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            Login
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;