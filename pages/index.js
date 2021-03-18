import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({imagens}) {
  return (
    <div>
      <main className={styles.main}>
      <h1 className={styles.title}> Imagens para você </h1>
      <h2>Relaxa, são livre de Copyright!</h2>
      <p>Made with love by Lucas Thomaz - 2021</p>
    </main>
    <hr/>

    <div  className={styles.homegrid}>
    
       {imagens.map(
           item=>(
            <div>   
             <a href={item.download_url}>
               <img with="500px" height="300px" src={item.download_url}></img>
             </a>
             <br/>
             <center> <b>Autor: {item.author}</b> </center>   
       </div>
       ))}
      
   </div>

  <h3>
   <center>
     <Link href="/featured"> QUERO VER MAIS IMAGENS! </Link>
   </center>
   </h3>

    </div>
  )
  
}

export async function getServerSideProps() {
  const count = 4;
  const res = await fetch("https://picsum.photos/v2/list?page=3&limit="+count);
  const json = await res.json();
  
  // Na ausencia de json...
  if (!json) {
    return {
      notFound: true,
    }
  }

  return {
    props: {imagens: json},
  }
} 
