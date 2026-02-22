export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0b0f19",
      color: "white",
      flexDirection: "column",
      textAlign: "center",
      padding: "40px"
    }}>
      <h1 style={{fontSize:"48px"}}>GPPIS</h1>

      <p style={{fontSize:"22px", marginTop:"10px"}}>
        Gestão Inteligente para Manutenções Industriais
      </p>

      <p style={{maxWidth:"700px", marginTop:"20px", opacity:0.8}}>
        Sistemas profissionais para gestão de manutenção, estoque e processos industriais.
      </p>

      <a
        href="mailto:pedrozo@gppis.com.br"
        style={{
          marginTop:"30px",
          padding:"14px 28px",
          background:"#1e40af",
          borderRadius:"10px",
          textDecoration:"none",
          color:"white",
          fontWeight:"bold"
        }}
      >
        Entrar em contato
      </a>
    </main>
  )
}
