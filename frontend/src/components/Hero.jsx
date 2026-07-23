function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">

      <h1 className="text-6xl font-bold text-white leading-tight">
        Preserve Today,
        <br />
        Unlock Tomorrow.
      </h1>

      <p className="text-gray-400 text-xl mt-6 max-w-2xl">
        Create encrypted digital time capsules filled with memories,
        letters, photos, and videos to be opened in the future.
      </p>

      <button className="mt-10 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl text-lg transition">
        Create Your Capsule
      </button>

    </section>
  );
}

export default Hero;