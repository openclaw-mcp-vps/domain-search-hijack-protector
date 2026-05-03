import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DomainGuard – Protect Domain Searches from Registrar Hijacking",
  description: "Search domains anonymously. We proxy availability checks through rotating endpoints so registrars can't see — and squat on — your ideas."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0a1ad3c7-6ac3-4b5e-9ae7-5ac6c7e2cb13"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
