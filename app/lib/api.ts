const WP_BASE = process.env.NEXT_PUBLIC_WP_URL;

export async function fetchWP(endpoint: string) {
    const res = await fetch(`${WP_BASE}${endpoint}`, {
        next: { revalidate: 60 } // ISR
    });

    if (!res.ok) {
        throw new Error('Failed to fetch WordPress data');
    }

    return res.json();
}
