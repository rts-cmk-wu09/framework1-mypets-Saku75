import "@/styles/global.scss";
import { Figtree, Montserrat } from "next/font/google";

const fontBody = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

const fontHeading = Figtree({
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontBody.variable} ${fontHeading.variable} font-body`}
    >
      <body className="grid min-h-screen grid-rows-layout bg-neutral-50 text-neutral-950">
        {children}
      </body>
    </html>
  );
}
