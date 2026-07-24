import {
    CalendarDays,
    Image,
    Video,
    Mail,
    Mic,
    Lock
} from "lucide-react";

function CapsulePreview() {
    return (
        <section className="py-32 px-8">

            <div className="max-w-7xl mx-auto">

                <h2 className="text-6xl font-black text-center bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent">
                    Your Future Capsule
                </h2>

                <p className="text-center text-gray-400 text-xl mt-6">
                    Every memory is encrypted, protected and waiting for the perfect moment.
                </p>

                <div className="flex justify-center mt-20">

                    <div className="w-[500px] rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 hover:border-purple-500 duration-300">

                        <div className="flex justify-between items-center">

                            <h3 className="text-3xl font-bold">
                                🎂 Birthday Capsule
                            </h3>

                            <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400">
                                Active
                            </span>

                        </div>

                        <div className="flex items-center gap-3 mt-8 text-gray-300">

                            <CalendarDays />

                            Unlocks on

                            <span className="text-purple-400 font-semibold">
                                15 Aug 2035
                            </span>

                        </div>

                        <div className="mt-10 space-y-6">

                            <div className="flex justify-between">
                                <span className="flex gap-3"><Image /> Photos</span>
                                <span>128</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="flex gap-3"><Video /> Videos</span>
                                <span>23</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="flex gap-3"><Mail /> Letters</span>
                                <span>17</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="flex gap-3"><Mic /> Voice Notes</span>
                                <span>9</span>
                            </div>

                        </div>

                        <div className="mt-10 flex items-center gap-3 text-purple-400">

                            <Lock />

                            AES-256 Encrypted

                        </div>

                        <div className="flex gap-4 mt-12">

                            <button className="flex-1 py-4 rounded-xl border border-purple-500 hover:bg-purple-500/10">
                                Preview
                            </button>

                            <button className="flex-1 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500">
                                Create Capsule
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default CapsulePreview;