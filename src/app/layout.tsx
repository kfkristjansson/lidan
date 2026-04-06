import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jóhanna Steingrímsdóttir — EMDR meðferðaraðili",
  description:
    "EMDR meðferðaraðili og hjúkrunarfræðingur. Sérhæfing í áfallavinnslu, þunglyndi, kvíða og núvitund. Vallakór 4, Kópavogur.",
  openGraph: {
    title: "Jóhanna Steingrímsdóttir — EMDR meðferðaraðili",
    description: "EMDR, hugræn atferlismeðferð og núvitund.",
    url: "https://lidan.is",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="is" className={poppins.variable}>
      <body className="font-sans antialiased text-body bg-page">
        {children}
      </body>
    </html>
  );
}
