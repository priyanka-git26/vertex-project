import Link from 'next/link';

export default function Header({ data }: any) {
    const { acf, primaryMenu } = data;

    return (
        <header className="border-b sticky top-0 bg-white z-50">
            <div className="container flex items-center justify-between py-4">

                {/* Logo */}
                <Link href="/">
                    <img
                        src={acf.site_logo.url}
                        alt={acf.site_logo.alt}
                        className="logo-blk"
                    />
                </Link>

                {/* WP Menu */}
                <nav className="hidden md:flex gap-6">
                    {primaryMenu.map((item: any) => (
                        <Link
                            key={item.id}
                            href={item.url.replace(acf.site_url, '')}
                            className="hover:underline"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <Link
                    href={acf.header_cta_text}
                    className="bg-black text-white px-5 py-2 rounded"
                >
                    {acf.header_cta_text}
                </Link>
            </div>
        </header>
    );
}
