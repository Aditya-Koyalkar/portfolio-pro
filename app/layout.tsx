import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./_components/ThemeProvider";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adityakoyalkar.tech/"),
  title: {
    default: "Aditya Koyalkar",
    template: "%s | Aditya Koyalkar",
  },
  description:
    "I'm Aditya Koyalkar — a Full Stack Developer specializing in React, Next.js, and TypeScript. Based in India, I build modern, fast, and accessible web applications.",
  keywords: [
    "Aditya Koyalkar",
    "Koyalkar Aditya",
    "Aditya Developer",
    "Aditya Koyalkar Portfolio",
    "Full Stack Developer India",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Frontend Engineer",
  ],
  authors: [{ name: "Aditya Koyalkar", url: "https://www.adityakoyalkar.tech/" }],
  creator: "Aditya Koyalkar",
  openGraph: {
    title: "Aditya Koyalkar - Full Stack Developer",
    description:
      "Portfolio of Aditya Koyalkar — Full Stack Developer from India. Specialized in building modern apps with React, Next.js, and TypeScript.",
    url: "https://www.adityakoyalkar.tech/",
    siteName: "Aditya Koyalkar",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 675,
        alt: "Aditya Koyalkar - Full Stack Developer",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Aditya___twt",
    creator: "@Aditya___twt",
    images: ["/me.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistMono.className} antialiased font-lexend flex justify-center py-10 md:py-16 px-4 md:px-10`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {" "}
          <div className="w-full h-full md:max-w-[700px] border-dashed  border-2 p-4">{children}</div>{" "}
        </ThemeProvider>
      </body>
    </html>
  );
}
