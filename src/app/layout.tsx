import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "쑤캥 보건실 링크모음 | 온라인 보건실 · School Health Hub";
const siteDescription = "보건교사를 위한 온라인 보건실, 업무 도구, 강의, 전자책, 운영 사례를 한 곳에서 확인하세요.";
const shareImage = "/assets/otter-profile.png";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: shareImage,
    apple: shareImage
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "쑤캥 보건실 링크모음",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: shareImage,
        width: 1254,
        height: 1254,
        alt: "쑤캥 보건실 링크모음 대표 이미지"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [shareImage]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
