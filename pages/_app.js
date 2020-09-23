import Menu from '../components/menu'
import Footer from '../components/footer'
import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <AnimatePresence exiteBeforeEnter>
        <>
        <Menu />
        <Component {...pageProps} /><Footer />
        </>
      </AnimatePresence>
    
}

export default MyApp
