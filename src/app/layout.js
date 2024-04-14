import "./globals.css";
import { Inter } from "next/font/google";
import ReduxProvider from "@/lib/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Drawing Game",
  description: "A frontend test before interview of LangLive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
