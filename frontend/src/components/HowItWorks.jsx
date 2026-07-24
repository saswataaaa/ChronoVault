import { Archive, Upload, CalendarClock, Lock } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: Archive,
      title: "Create Capsule",
      desc: "Start a new digital time capsule with a unique title."
    },
    {
      icon: Upload,
      title: "Upload Memories",
      desc: "Add photos, videos, letters and important documents."
    },
    {
      icon: CalendarClock,
      title: "Choose Unlock Date",
      desc: "Select the exact date when your capsule will become available."
    },
    {
      icon: Lock,
      title: "Encrypt & Store",
      desc: "Your memories are encrypted and securely stored until the unlock date."
    }
  ];

  return (
    <section className="py-32 px-8">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-6xl font-black text-center bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent">
          How It Works
        </h2>

        <p className="text-center text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
          Creating a digital time capsule takes only four simple steps.
        </p>

        <div className="relative mt-24">

          {/* Timeline Line */}

          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>

          <div className="grid lg:grid-cols-4 gap-10 relative">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative text-center"
                >

                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,.4)] relative z-10">

                    <Icon size={34} className="text-white" />

                  </div>

                  <div className="mt-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                    <div className="text-purple-400 text-lg font-bold mb-3">
                      Step {index + 1}
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 mt-4 leading-7">
                      {step.desc}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;