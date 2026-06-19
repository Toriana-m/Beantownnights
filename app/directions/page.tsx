import {Permanent_Marker, Space_Grotesk} from "next/font/google";
import ImageScroller from "@/app/components/ImageScroller";
import Footer from "@/app/components/Footer";

const marker = Permanent_Marker({
    weight: "400",
    subsets: ["latin"],
});
const space = Space_Grotesk({
    subsets: ["latin"],
});

export default function directionsPage(){
    return(
        <main className="min-h-screen bg-[#1a0933] text-white flex flex-col items-center justify-start text-center px-6 pt-10 pb-40 overflow-x-hidden">
            <section className="w-full max-w-5xl flex flex-col items-center gap-6">
                <h1 className={`${marker.className} text-center mt-6 text-5xl leading-none text-[#00e5ff]`}>
                    Time to get your tickets!
                </h1>
            <h2 className={`${marker.className} mt-4 text-center`}>
                Follow directions below!
            </h2>
                <p className={`${space.className} mt-4 text-white/80`}>
                    Scroll through the event options, choose your move, and follow the
                    instructions to get on the list.
                </p>

                <ImageScroller />
                <div className={`${space.className} mt-8 max-w-2xl mx-auto text-white/80 leading-relaxed pb-24`}>
                    <h3 className="text-2xl font-bold text-[#00e5ff] mb-4">
                        How to Get on the List
                    </h3>

                    <div className="h-24" />

                    <p className="text-[#00e5ff]">
                        Click the link below, and click on the event you want! Then submit, easy peasy!
                    </p>

                    <div className="h-8" />

                    <a
                        href="http://tinyurl.com/freetixtm"
                        className={`${space.className} inline-block mt-4 rounded-full bg-[#00e5ff] text-[#1a0933] px-8 py-4 font-bold hover:bg-[#e60067] hover:text-white transition`}
                    >
                        Get Tickets Here
                    </a>

                    <div className="h-8" />

                    <p className="mt-4 text-[#e60067]">
                        For the smoothest entry, arrive early, bring a valid ID, and make
                        sure your name or ticket confirmation matches the event instructions.
                    </p>
                    <div className="h-8" />

                </div>

                </section>
            <Footer/>
        </main>

    )
}