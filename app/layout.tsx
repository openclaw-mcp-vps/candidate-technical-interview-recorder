import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InterviewRec — Record & Analyze Technical Interviews",
  description: "Record coding interviews, generate transcripts, and get bias-free candidate assessments powered by AI."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3c9ec6ec-d53d-4c61-bf00-611392837d7c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
