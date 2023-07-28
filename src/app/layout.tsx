import { Inter, Roboto } from "next/font/google";
import "./globals.css";

import { AuthHandler } from '@/context/Auth';
import NavbarMUI from "@/ui/NavbarMUI";

import { ReduxProviders } from "@/redux/provider";
import ThemeRegistryMaterialUI from "@/components/ThemeRegistry/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



// export default async function RootLayout({children}: {children: React.ReactNode;}) {

//   return (
//     <html lang="en">
//       <body className={roboto.className}>
//         <ThemeRegistryMaterialUI>
//           <NavbarMUI>
//             {children}
//           </NavbarMUI>
//         </ThemeRegistryMaterialUI>
//       </body>
//     </html>
//   );
// }

export interface Props {
  children: React.ReactNode,
}

export default async function RootLayout(props: Props) {

  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReduxProviders>
        <AuthHandler>
        <ThemeRegistryMaterialUI>
          <NavbarMUI>
            {props.children}
          </NavbarMUI>
        </ThemeRegistryMaterialUI>
        </AuthHandler>
        </ReduxProviders>
      </body>
    </html>
  );
}
