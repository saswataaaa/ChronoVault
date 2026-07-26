import { Shield, Lock, Clock3 } from "lucide-react";
<section
id="security"
className="..."
></section>

function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "AES-256 Encryption",
      desc: "Every memory is encrypted before it leaves your device, ensuring military-grade protection."
    },
    {
      icon: Clock3,
      title: "Time-Locked Access",
      desc: "Your capsule remains sealed until the exact unlock date you choose."
    },
    {
      icon: Lock,
      title: "Zero-Knowledge Privacy",
      desc: "Only you hold the key. Even ChronoVault cannot access your memories."
    }
  ];

  return (
    <section className="py-32 px-8">
      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <div>

          <span className="text-purple-400 font-semibold uppercase tracking-widest">
            Security
          </span>

          <h2 className="text-6xl font-black mt-4 leading-tight">
            Your Memories.
            <br />
            Protected Forever.
          </h2>

          <p className="mt-8 text-xl text-gray-400 leading-9">
            ChronoVault uses industry-leading encryption, secure cloud storage,
            and time-lock technology so your memories stay private until the
            exact moment you decide to unlock them.
          </p>

          <div className="space-y-6 mt-12">

            {securityFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex gap-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-purple-500 transition duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                    <Icon className="text-white" size={30} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-gray-400 mt-2 leading-7">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 rounded-full blur-[120px] bg-purple-600/30"></div>

            <div className="relative w-[420px] h-[420px] rounded-full border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-2xl flex items-center justify-center">

              <div className="text-center">

                <div className="text-8xl mb-4">🛡️</div>

                <h3 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  AES-256
                </h3>

                <p className="text-gray-300 mt-4 text-xl">
                  Military Grade Encryption
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Security;