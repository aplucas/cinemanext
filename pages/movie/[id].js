import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { apiBaseImage } from "../../lib/tmdb"

export default function MovieItem({ info }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinema Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {info.title}
        </h1>
        <p>{info.overview}</p>

        <p>Nota: {info.vote_average}</p>

        <img src={`${apiBaseImage}${info.backdrop_path}`} width="600" />

      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id
  const res = await fetch(`http://localhost:3000/api/movie/${id}`)
  const json = await res.json()
  console.log(json);

  return {
    props: {
      info: json.info
    }
  }
}