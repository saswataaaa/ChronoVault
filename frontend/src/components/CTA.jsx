import { ArrowRight } from "lucide-react";
<section
id="create"
className="..."
></section>
function CTA() {
  return (
    <section className="py-32 px-8">

      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[40px] border border-purple-500/30 bg-gradient-to-br from-purple-900/40 via-[#16102d] to-black p-16">

          {/* Glow */}

          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-purple-600/30 blur-[120px]"></div>

          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-pink-600/20 blur-[120px]"></div>

          <div className="relative z-10 text-center">

            <h2 className="text-6xl font-black leading-tight">

              Ready To Preserve
              <br />

              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">

                Your Memories?

              </span>

            </h2>

            <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-8">

              Create a secure digital time capsule today and let your future
              self relive unforgettable moments years from now.

            </p>

            <button className="mt-12 inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-xl font-semibold hover:scale-105 duration-300 shadow-[0_0_35px_rgba(168,85,247,.45)]">

              Create Capsule

              <ArrowRight size={22}/>

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;