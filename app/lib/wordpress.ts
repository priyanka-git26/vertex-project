const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL;

export async function getAboutPage() {
    const res = await fetch(
        `${WP_API_URL}/wp-json/wp/v2/pages?slug=about-us`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch About page");
    }

    const data = await res.json();
    return data[0]; // about-us page
}
