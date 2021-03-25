import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({ author }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinema Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sobre o Sistema
        </h1>

        <p>
          Sistema desenvolvido assistindo um vídeo no Youtube para aprender os primeiros passos com o framework Next,js
        </p>

        <hr/>

        Autor: {author}
        <hr/>

        <br/>

        <Link href="/busca">Ir para a Busca</Link>
      </main>
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      author: 'Lucas A Pereira'
    }
  }
}