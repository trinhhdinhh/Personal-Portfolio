import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import IntroOverlay from "@/components/IntroOverlay";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Trinh Dinh",
  description: "Trinh Dinh's portfolio — Computer Science student at LSU specializing in Software Engineering. Explore my projects, experience, and ways to get in touch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white leading-8 overflow-x-hidden transition-colors duration-200`}
        suppressHydrationWarning
      >
        <IntroOverlay />
        {children}
      </body>
    </html>
  );
}
