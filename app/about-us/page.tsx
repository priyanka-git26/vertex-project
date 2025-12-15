import { getAboutPage } from "@/lib/wordpress";
import Hero from "@/components/Hero";

export default async function AboutPage() {
    const page = await getAboutPage();
    const acf = page.acf;

    return (
        <>
            <Hero
                title={acf.banner_title}
                subtitle={acf.banner_subtitle}
                imageUrl={acf.banner_background.url}
                imageAlt={acf.banner_background.alt}
            />

            {/* Other sections */}
        </>
    );
}
