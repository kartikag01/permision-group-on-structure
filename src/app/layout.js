import { Inter } from "next/font/google";
import "./globals.css";
import PermissionGroupProvider from "@/components/store/PermissionGroupProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PermissionGroupProvider>
        <body className={inter.className}>{children}</body>
        <div id="persmission-workflow-div" />
      </PermissionGroupProvider>
    </html >
  );
}