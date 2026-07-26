import {
  ShieldCheck,
  Clock3,
  Cloud,
  Users,
  Sparkles,
  Lock,
} from "lucide-react";
<section
id="features"
className="..."
></section>

function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Military Grade Encryption",
      desc: "Protect every memory using AES-256 encryption."
    },
    {
      icon: Clock3,
      title: "Time Locked Capsules",
      desc: "Unlock memories only on your chosen future date."
    },
    {
      icon: Cloud,
      title: "Secure Cloud Storage",
      desc: "Store photos, videos and letters safely."
    },
    {
      icon: Users,
      title: "Share With Loved Ones",
      desc: "Send future memories to friends and family."
    },
    {
      icon: Sparkles,
      title: "AI Memory Summary",
      desc: "Generate beautiful summaries for your memories."
    },
    {
      icon: Lock,
      title: "Zero Knowledge Privacy",
      desc: "Only you can decrypt your capsule."
    },
  ];

  return (
    <section className="py-32 px-8">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-6xl font-black text-center bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent">
          Why Choose ChronoVault?
        </h2>

        <p className="text-center text-gray-400 mt-6 text-xl max-w-3xl mx-auto">
          Your memories deserve more than storage. They deserve protection,
          privacy and the excitement of being rediscovered in the future.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-purple-500 transition duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mb-6">
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {feature.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Features;