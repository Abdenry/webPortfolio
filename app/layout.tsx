import NavBar from "./components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" overscroll-none">
      <body className={`${inter.className} antialiased`}>
        <NavBar />
        <main className="py-[60px] bg-[#212121] min-h-screen">
          <div className="container mx-auto max-w-[700px] px-3 pt-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
