
import Link from 'next/link'

export default function Page(){
 return (
  <main>
   <section style={{background:'#0B1F3B',color:'white',padding:'100px',textAlign:'center'}}>
    <h1 style={{fontSize:48}}>GPPIS</h1>
    <p>Gestão Inteligente para Manutenções Industriais</p>
    <div style={{marginTop:30}}>
      <Link href="/pcm" style={{background:'#F2B705',padding:'12px 24px',color:'#000'}}>Conhecer Sistema</Link>
    </div>
   </section>

   <section style={{padding:60}}>
    <h2>Plataforma</h2>
    <p>Software para gestão de manutenção, ativos e operações industriais.</p>
   </section>
  </main>
 )
}
