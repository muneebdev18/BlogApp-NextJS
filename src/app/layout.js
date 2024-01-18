import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="container"> */}
        <Header />
        {children}
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
