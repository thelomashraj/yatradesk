import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"YatraDesk — Travel sales, in one place",description:"WhatsApp first sales workspace for travel agencies"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
