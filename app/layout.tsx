import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "受験プランナー - 高校生のための受験管理アプリ",
  description: "受験校、模試、費用を一元管理。あなたの受験を全面サポートします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AuthProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
