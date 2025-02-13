import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'InteractCV',
  description:
    'Crea CVs interactivos y atractivos online. Integra multimedia y exporta en PDF. Destaca en tu búsqueda de empleo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
