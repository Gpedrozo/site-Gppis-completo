import "./globals.css"

export const metadata = {
  title: "GPPIS",
  description: "Gestão Inteligente para Manutenções Industriais"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
