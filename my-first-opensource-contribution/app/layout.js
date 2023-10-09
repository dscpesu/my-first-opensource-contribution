import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./utils/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My-First-OpenSource-Contribution",
  description: "Repository by GDSC PESU RR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
