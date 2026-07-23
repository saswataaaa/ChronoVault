import hourglass from "../assets/hourglass.png";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24">

      <div className="max-w-7xl mx-auto w-full">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* LEFT SIDE */}
          <div className="lg:w-1/2">

            <div className="mb-6">
              <span className="px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500 text-purple-300">
                🔒 Secure • Encrypted • Future Ready
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">

              <span className="bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent">
                Preserve Today.
              </span>

              <br />

              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
                Unlock Tomorrow.
              </span>

            </h1>

            <p className="mt-8 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl">
              Create encrypted digital time capsules filled with memories,
              letters, photos, and videos to be opened in the future.
            </p>

            <button className="mt-10 px-10 py-5 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition duration-300 shadow-xl">
              🚀 Create Your Capsule
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-1/2 flex justify-center">

            <img
              src={hourglass}
              alt="Hourglass"
              className="w-[420px] lg:w-[520px] drop-shadow-[0_0_60px_rgba(168,85,247,0.6)]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;