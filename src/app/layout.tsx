import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apeksha Sanjay Shetti | Portfolio",
  description: "Salesforce Associate Success Guide & Computer Science Graduate",
  openGraph: {
    title: "Apeksha Sanjay Shetti | Portfolio",
    description: "Salesforce Associate Success Guide & Computer Science Graduate",
    images: ["/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apeksha Sanjay Shetti | Portfolio",
    description: "Salesforce Associate Success Guide & Computer Science Graduate",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/profile.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
