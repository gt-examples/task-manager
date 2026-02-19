import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { GTProvider } from "gt-next";
import { getGT } from "gt-next/server";
import { getLocale } from "gt-next/server";

const inter = Inter({ subsets: ["latin"] });

const locales = ["en", "es", "fr", "ja", "zh"];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getGT();
  const locale = await getLocale();
  const title = t("Task Manager | General Translation");
  const description = t(
    "A Kanban-style task board demonstrating internationalization with General Translation."
  );

  const alternates: Record<string, string> = {};
  for (const loc of locales) {
    alternates[loc] = `/${loc}`;
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      languages: alternates,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-neutral-950 text-neutral-100 antialiased`}>
        <GTProvider>
          {children}
        </GTProvider>
      </body>
    </html>
  );
}
