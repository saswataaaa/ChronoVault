import chronoCore from "../assets/chronocore.png";
<section
id="home"
className="..."
></section>

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32 px-12">
<div className="w-full px-12">
<div className="grid lg:grid-cols-[1.05fr_0.95fr] items-center">
          {/* LEFT SIDE */}
          <div className="pr-2">

            {/* Badge */}
            <div className="mb-8">
              <span className="px-6 py-3 rounded-full border border-purple-500/50 bg-purple-600/10 text-purple-300 text-lg">
                🔒 Secure • Encrypted • Future Ready
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-black leading-[0.9] tracking-tight text-[88px]">

<span className="bg-gradient-to-r from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
Preserve Today.
</span>

<br />

<span className="bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
Unlock Tomorrow.
</span>

</h1>

            {/* Paragraph */}
            <p className="mt-10 text-2xl text-gray-300 leading-relaxed max-w-2xl">

              Create encrypted digital time capsules filled with memories,
              letters, photos, and videos to be opened in the future.

            </p>

            {/* Buttons */}
            <div className="flex gap-6 mt-12">

              <button className="px-10 py-5 rounded-2xl text-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 shadow-[0_0_35px_rgba(168,85,247,.45)] hover:scale-105 duration-300">

                🚀 Create Your Capsule

              </button>

              <button className="px-10 py-5 rounded-2xl border border-gray-600 text-white text-xl hover:border-purple-500 duration-300">

                Learn More

              </button>

            </div>

            {/* Features */}
            <div className="flex gap-10 mt-14 text-gray-300">

              <div>
                <div className="text-purple-400 text-3xl">🛡️</div>
                <p className="mt-2 text-lg">
                  End-to-End
                  <br />
                  Encrypted
                </p>
              </div>

              <div>
                <div className="text-purple-400 text-3xl">🕒</div>
                <p className="mt-2 text-lg">
                  Time-Locked
                  <br />
                  Security
                </p>
              </div>

              <div>
                <div className="text-purple-400 text-3xl">☁️</div>
                <p className="mt-2 text-lg">
                  Secure Cloud
                  <br />
                  Storage
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-end translate-x-0">

            <img
              src={chronoCore}
              alt="Chrono Core"
className="w-[920px] max-w-none drop-shadow-[0_0_90px_rgba(168,85,247,.8)] animate-float"            />

          </div>

        </div>

        {/* Bottom Stats */}

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-12 py-10">

          <div className="grid grid-cols-4 text-center">

            <div>

              <h2 className="text-5xl font-bold text-purple-400">
                10K+
              </h2>

              <p className="text-gray-400 mt-2 text-lg">
                Capsules Created
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-purple-400">
                5K+
              </h2>

              <p className="text-gray-400 mt-2 text-lg">
                Happy Users
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-purple-400">
                1M+
              </h2>

              <p className="text-gray-400 mt-2 text-lg">
                Memories Protected
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-purple-400">
                256-bit
              </h2>

              <p className="text-gray-400 mt-2 text-lg">
                AES Encryption
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;