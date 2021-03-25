import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { apiBaseImage } from "../lib/tmdb"

export default function Home({ list }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinema Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em Destaque
        </h1>

        <Link href="/busca">Ir para a Busca</Link>

        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <a href={`/movie/${item.id}`}>
                <img src={`${apiBaseImage}${item.poster_path}`} width="150" /><br />
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <Link href="/sobre">Sobre</Link>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/trending')
  const json = await res.json()

  return {
    props: {
      list: json.list
    }
  }
}