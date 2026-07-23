function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-6">
      <h1 className="text-2xl font-bold text-white">
        ⏳ ChronoVault
      </h1>

      <div className="flex gap-8 text-gray-300">
        <a href="#">Features</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button className="bg-purple-600 px-5 py-2 rounded-lg hover:bg-purple-700 transition">
        Login
      </button>
    </nav>
  );
}

export default Navbar;