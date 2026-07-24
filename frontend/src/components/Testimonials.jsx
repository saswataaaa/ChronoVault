import { Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Software Engineer",
      text: "Opening a capsule after 5 years felt like travelling back in time. It was one of the most emotional experiences I've ever had."
    },
    {
      name: "Priya Mehta",
      role: "Content Creator",
      text: "ChronoVault helped me preserve my college memories beautifully. The interface is amazing and the experience is unforgettable."
    },
    {
      name: "Rahul Verma",
      role: "Photographer",
      text: "I created a capsule for my daughter to open on her 18th birthday. It's something she'll treasure forever."
    }
  ];

  return (
    <section className="py-32 px-8">

      <div className="max-w-[1500px] mx-auto">

        <h2 className="text-6xl font-black text-center bg-gradient-to-r from-white via-purple-300 to-pink-500 bg-clip-text text-transparent">
          Loved By Future Dreamers
        </h2>

        <p className="text-center text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
          Thousands of users trust ChronoVault to protect their most valuable memories.
        </p>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-purple-500 hover:-translate-y-2 transition duration-300"
            >

              <div className="flex gap-1 text-yellow-400 mb-6">

                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />

              </div>

              <p className="text-gray-300 leading-8 italic">
                "{item.text}"
              </p>

              <div className="mt-10">

                <h3 className="text-2xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-purple-400">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;