import Style from '../styles/menu.module.css'
import Link from 'next/Link'
import { useRouter } from 'next/router'

export default function Menu() {
  const router = useRouter()
  return (
    <div className={Style.menu}>
        <img className={Style.logo} src="img/logo.png"/>
        <div className={Style.buttonGroup}>
            <Link href="/"><a className={router.pathname == "/" ? Style.active : Style.button}>Home</a></Link>
            <Link href="/about"><a className={router.pathname == "/about" ? Style.active : Style.button}>About</a></Link>
            <Link href="/course"><a className={router.pathname == "/course" ? Style.active : Style.button}>Course</a></Link>
            <Link href="/contact"><a className={router.pathname == "/contact" ? Style.active : Style.button}>Contact</a></Link>
            
        </div>
        
        <br></br>
    </div>
  )
}