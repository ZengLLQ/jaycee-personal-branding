import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "JAYCEE 曾令强 — Back-end Developer & Penetration Tester",
  description:
    "Portfolio of Jaycee (曾令强): freelance back-end developer and penetration tester exploring AI & machine learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
