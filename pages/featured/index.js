import styles from '../../styles/Images.module.css'
import Link from 'next/link'

export default function Imagens({imagens}) {
  return (
    <div  className={styles.homegrid}>
 
    {imagens.map(
        item=>(
         <div>   
          <a href={item.download_url}>
            <img with="600px" height="600px" src={item.download_url}></img>
          </a>
          <br/>
          <center> <b>Autor: {item.author}</b> </center>   
    </div>
    ))}
   

   <h3>
   <center>
     <Link href="/"> VOLTAR AO INICIO </Link>
   </center>
   </h3>

</div>
  )
}

export async function getServerSideProps() {
  const count = 50;
  const res = await fetch("https://picsum.photos/v2/list?page=10&limit="+count);
  const json = await res.json();

  
  if (!json) {
    return {
      notFound: true,
    }
  }

  return {
    props: {imagens: json},
  }
  
}