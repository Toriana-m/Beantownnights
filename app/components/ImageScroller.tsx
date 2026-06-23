import Image from 'next/image';

// Example image dataset
const IMAGES = [
    { id: 1, src: '/1.jpeg', alt: 'one' },
    { id: 2, src: '/2.jpeg', alt: '2' },
    { id: 3, src: '/three.jpeg', alt: 'three' },
    { id: 4, src: '/four.jpeg', alt: 'four' },
    { id: 5, src: '/5.jpeg', alt: 'five' },
    { id: 6, src: '/6.jpeg', alt: 'six' },
    { id: 7, src: '/7.jpeg', alt: 'seven' },
    { id: 8, src: '/8.jpeg', alt: 'eight' },
    { id: 9, src: '/9.jpeg', alt: 'nine' },
    { id: 10, src: '/10.jpeg', alt: 'ten' },
    { id: 11, src: '/11.jpeg', alt: 'eleven' },
    { id: 12, src: '/12.jpeg', alt: 'twelve' },
    { id: 13, src: '/13.jpeg', alt: 'thirteen' },
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