import Style from '../styles/course.module.css'
import { motion } from 'framer-motion'
export default function Course() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
        <div className={Style.course}>
            <img className={Style.img} src="img/energy.jpg"/>
            <div className={Style.text}>
                <h1>What will you learn about:</h1>

                <p>The history of Reiki</p>
                <p>Reiki Fundamentals</p>
                <p>First steps</p>
                <p>Benefits of Reiki</p>
                <p>Chakras</p>
            </div>
        </div>
    </motion.div>
  )
}
