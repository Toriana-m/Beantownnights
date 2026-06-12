import Image from 'next/image';

// Example image dataset
const IMAGES = [
    { id: 1, src: '/one.jpeg', alt: 'one' },
    { id: 2, src: '/two.jpeg', alt: '2' },
    { id: 3, src: '/WhatsApp Image 2026-06-04 at 3.00.13 PM.jpeg', alt: '3' },
    { id: 4, src: '/WhatsApp Image 2026-06-04 at 3.00.17 PM.jpeg', alt: '4' },
    { id: 5, src: '/WhatsApp Image 2026-06-04 at 11.22.37 AM.jpeg', alt: '5' },
    { id:6, src: '/WhatsApp Image 2026-06-04 at 11.22.46 AM.jpeg', alt:'6'}
];

export default function ImageScroller() {
    return (
        <div className="w-full max-w-6xl mx-auto py-8">
            {/* Scroll Container */}
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth">
                {IMAGES.map((image) => (
                    <div
                        key={image.id}
                        className="shrink-0 w-75 h-100 relative rounded-2xl overflow-hidden shadow-md snap-center"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="300px"
                            className="object-cover transition-transform duration-300 hover:scale-105"
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}