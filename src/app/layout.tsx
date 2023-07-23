import { Session } from 'next-auth';
import { Inter, Roboto } from "next/font/google";
import { headers } from 'next/headers';
import "./globals.css";

import ThemeRegistryMaterialUI from "@/components/ThemeRegistry/ThemeRegistry";


import NavbarMUI from "@/ui/NavbarMUI";


const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default async function RootLayout({children}: {children: React.ReactNode;}) {

  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeRegistryMaterialUI>
          <NavbarMUI>
            {children}
          </NavbarMUI>
        </ThemeRegistryMaterialUI>
      </body>
    </html>
  );
}
