import Head from 'next/head'
import styles from '../styles/style.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className={styles.container}>
      <Head>
        <title>Reiki With Katia</title>
        <meta property="og:title" content="Reiki With Katia" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.box}>
        <div className={styles.text}>
          The secret art of inviting happiness<br></br>
          The miraculous medicine of all diseases<br></br>
          Just for today, do not anger<br></br>
          Do not worry and be filled with gratitude<br></br>
          Devote yourself to your work. Be kind to people.<br></br>
          Every morning and evening, join your hands in prayer.<br></br>
          Pray these words to your heart<br></br>
          and chant these words with your mouth<br></br>
          Usui Reiki Treatment for the improvement of body and mind<br></br>
          The founder,<br></br>
          <h5>Usui Mikao</h5>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </motion.div>
  )
}
