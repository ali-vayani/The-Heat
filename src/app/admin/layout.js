import { Sora } from "next/font/google";
import "../globals.css";
const sora = Sora({weight: '600', variable: '400', subsets: ['latin']})

export const metadata = {
  title: "The Heat Admin",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={sora.className}>{children}</body>
      </html>
    );
  }