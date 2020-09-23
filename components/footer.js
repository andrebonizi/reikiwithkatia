import Style from '../styles/footer.module.css'
import Link from 'next/Link'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <div className={Style.footer}>
        <div className={Style.buttonGroup}>
            <a href="https://www.instagram.com/reikiwithkatiarosenberg/">
                <FontAwesomeIcon className={Style.icon} icon={faInstagram} />
                &nbsp;Instagram
            </a>
            
        </div>
        
        <br></br>
    </div>
  )
}