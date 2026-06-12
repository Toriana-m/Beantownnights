import { Anton, Bebas_Neue, Permanent_Marker, Space_Grotesk } from "next/font/google";
import Footer from "@/app/components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  subsets: ["latin"],
});

export default function Home() {
  return (
      <main className="min-h-screen bg-[#1a0933] text-[#e60067] px-6 py-10 flex-col items-center justify-center">
        <h1 className={`${space} text-[#00e5ff] mt-4 text-6xl uppercase leading-none text-center`}>
          What's the move tonight?
        </h1>
        <p className={`${space.className} mt-2 text-[#e60067] text-center`}>
          We've got your plans covered
        </p>
        <section className="text-center border border-white/20 rounded-3xl p-8 mt-4bg-white/5 shadow-2xl">

          <p className={`${space.className} text-sm tracking-[0.35em] uppercase text-[#9b5cff]`}>
            Boston Nightlife
          </p>

          <h1 className={`${anton.className} mt-4 text-6xl uppercase leading-none`}>
            Beantown
            <br />
            Nights
          </h1>

          <p className={`${marker.className} mt-4 text-2xl text-[#9b5cff]`}>
            Your weekend plans start here.
          </p>

          <p className={`${space.className} mt-6 text-base text-[#9b5cff] leading-relaxed`}>
            Guest lists, club nights, events, and Boston moves all in one place.
            Stop asking the group chat what the move is.
          </p>

          <div className="mt-8 space-y-3">
            <a
                href="/directions"
                className={`${bebas.className} block rounded-full bg-[#00e5ff] text-black py-4 text-2xl tracking-wide hover:bg-white/80 transition`}
            >
              Get Your Tickets!
            </a>

            <a
                href="#"
                className={`${space.className} block rounded-full border border-white/30 py-3 text-sm uppercase tracking-widest hover:bg-white/10 transition`}
            >
              Event Flyers
            </a>
          </div>

          <p className={`${bebas.className} mt-8 text-3xl tracking-wide`}>
            Boston is outside.
          </p>

          <p className={`${space.className} mt-2 text-xs text-white/40`}>
            #BostonNightlife #BostonEvents #BostonClubs
          </p>
        </section>
      </main>

  );
}