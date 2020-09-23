import Style from '../styles/contact.module.css'
import { motion } from 'framer-motion'
export default function Contact() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
      <form className={Style.form}>
          <label>Name:</label>
          <input type="text" placeholder="Ex: John Smith"></input>
          <br></br>
          <label>Email:</label>
          <input type="text" placeholder="Ex: jsmith@email.com"></input>
          <br></br> <br></br>
          <label>Message:</label><br></br>
          <textarea placeholder="Ex: Hi Katia, I want to learn more about Reiki!"></textarea>
          <br></br>
          <hr></hr>
          <button type="submit">Send!</button>
      </form>
    </motion.div>
  )
}
