function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-centermin-h-screen pt-24 px-6">
      <div className="mb-6">
  <span className="px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500 text-purple-300">
    🔒 Secure • Encrypted • Future Ready
  </span>
</div>
      <h1 className="text-7xl font-extrabold leading-tight">
        Preserve Today.
<br />

<span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
Unlock Tomorrow.
</span>
      </h1>

      <p className="text-gray-400 text-xl mt-6 max-w-2xl">
        Create encrypted digital time capsules filled with memories,
        letters, photos, and videos to be opened in the future.
      </p>

      <button className="mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition duration-300">
  🚀 Create Your Capsule
      </button>

    </section>
  );
}

export default Hero;