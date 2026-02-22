
export const metadata = {
 title: "GPPIS",
 description: "Gestão Inteligente para Manutenções Industriais"
}

export default function RootLayout({ children }) {
 return (
  <html lang="pt-br">
   <body style={{margin:0,fontFamily:'Arial'}}>
    {children}
   </body>
  </html>
 )
}
