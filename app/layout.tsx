
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

const description = "Jackson Marketon is a seasoned Staff Software Engineer with over a decade of experience in solving complex business problems using cutting-edge web technologies. With a proven track record at top tech companies like Shopify, Pinterest, and OpenTable, Jackson excels in developing scalable solutions, enhancing user engagement, and leading high-performing teams. Specializing in Next.js, React.js, Node.js, and GraphQL, he consistently delivers impactful results. Committed to innovation and continuous improvement, Jackson is also an active volunteer with Red Rock Search & Rescue, demonstrating his dedication to community and technical excellence.I've been buildingJackson Marketon is a seasoned Senior Software Engineer with over a decade of experience in solving complex business problems using cutting-edge web technologies. With a proven track record at top tech companies like Shopify, Pinterest, and OpenTable, Jackson excels in developing scalable solutions, enhancing user engagement, and leading high-performing teams. Specializing in Next.js, React.js, Node.js, and GraphQL, he consistently delivers impactful results. Committed to innovation and continuous improvement, Jackson is also an active volunteer with Red Rock Search & Rescue, demonstrating his dedication to community and technical excellence."

export const metadata: Metadata = {
  title: "Jackson Marketon - Staff Product Engineer, Fullstack JavaScript",
  description,
  openGraph: {
    description,
    type: "website",
    siteName: "Jackson Marketon",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`h-full p-0 ${inter.className}`}>
        <ThemeProvider>
          <main className="dark:bg-gray-800 bg-gray-100 w-full max-w-7xl mx-auto overflow-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
