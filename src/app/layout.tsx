import type { Metadata } from "next";
import "@fontsource/baskervville/400.css";
import "@fontsource/baskervville/400-italic.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/pinyon-script/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Art Group",
  description:
    "Project Art Group has produced corporate, wedding, and celebration events since 2002. Project Art Corporate handles institutional and corporate events end to end.",
  icons: {
    icon: [
      { url: "/LOGO PA GROUP BLACK.png?v=2", type: "image/png" },
    ],
    shortcut: "/LOGO PA GROUP BLACK.png?v=2",
    apple: "/LOGO PA GROUP BLACK.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/LOGO PA GROUP BLACK.png?v=2" type="image/png" sizes="any" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
