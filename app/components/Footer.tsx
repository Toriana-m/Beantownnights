import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
    subsets: ["latin"],
});

export default function Footer(){
    return (
        <footer className={`${space.className} mt-20 w-full border-t border-[#00e5ff]/30 pt-6 pb-10 text-center text-sm text-white/60`}>
            <p>© 2026 Beantown Nights TM</p>

            <p className="mt-2">
                Boston nightlife, guest lists, and weekend moves.
            </p>

            <a
                href="https://www.instagram.com/beantownnightstm/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-white/70 hover:text-white transition"
            >
                Visit the{" "}
                <span style={{ color: "#00e5ff" }}>
      Insta
    </span>
                !
            </a>
        </footer>
    )
}