import Image from "next/image";

type HeroProps = {
    title: string;
    subtitle: string;
    imageUrl: string;
    imageAlt?: string;
};

export default function Hero({
    title,
    subtitle,
    imageUrl,
    imageAlt = "",
}: HeroProps) {
    return (
        <section className="relative h-[80vh] w-full">
            {/* Background Image */}
            <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
                <div className="max-w-4xl text-white">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        {title}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    );
}
