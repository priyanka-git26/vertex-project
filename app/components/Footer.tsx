export default function Footer({ data }: any) {
    const { acf, footerMenu } = data;

    return (
        <footer className="bg-black text-white mt-20">
            <div className="container py-16 grid md:grid-cols-4 gap-10">

                {/* Logo */}
                <img
                    src={acf.site_logo.url}
                    alt="Footer Logo"
                    className="footer-logo-blk"
                />

                {/* Footer Menu */}
                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        {footerMenu.map((item: any) => (
                            <li key={item.id}>
                                <a href={item.url}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 py-4 text-center text-sm">
                {acf.footer_copyright}
            </div>
        </footer>
    );
}
