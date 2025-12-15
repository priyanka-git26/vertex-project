import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getHeaderFooter } from "@/lib/getHeaderFooter";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getHeaderFooter();

  return (
    <html lang="en">
      <body>
        <Header data={data} />
        {children}
        <Footer data={data} />
      </body>
    </html>
  );
}
