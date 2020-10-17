import Head from "next/head"
import styles from "../styles/style.module.css"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
    >
      <Head>
        <title>Reiki With Katia</title>
        <meta property="og:title" content="Reiki With Katia" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.box}>
        <div className={styles.text}>
          <p>"Before healing others,</p>
          <p>It is necessary to heal thyself,</p>
          <p>to brign stabillity to thy own life."</p>
          <p>Dr. Mikao Usui</p>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </motion.div>
  )
}
