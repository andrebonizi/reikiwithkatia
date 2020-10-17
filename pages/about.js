import Style from "../styles/about.module.css"
import { motion } from "framer-motion"
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={Style.about}>
        <img className={Style.img} src="img/Mikao_Usui.png" />
        <div className={Style.text}>
          <p>
            Reiki is a Japanese technique for stress reduction and relaxation
            that also promotes healing. It is administered by "laying on hands"
            and is based on the idea that an unseen "life force energy" flows
            through us and is what causes us to be alive. If one's "life force
            energy" is low, then we are more likely to get sick or feel stress,
            and if it is high, we are more capable of being happy and healthy.
          </p>

          <p>
            The word Reiki is made of two Japanese words - Rei which means
            "God's Wisdom or the Higher Power" and Ki which is "life force
            energy". So Reiki is actually "spiritually guided life force
            energy." A treatment feels like a wonderful glowing radiance that
            flows through and around you.{" "}
          </p>

          <p>
            Reiki treats the whole person including body, emotions, mind and
            spirit creating many beneficial effects that include relaxation and
            feelings of peace, security and wellbeing. Many have reported
            miraculous results.
          </p>

          <p>
            Reiki is a simple, natural and safe method of spiritual healing and
            self-improvement that everyone can use. It has been effective in
            helping virtually every known illness and malady and always creates
            a beneficial effect. It also works in conjunction with all other
            medical or therapeutic techniques to relieve side effects and
            promote recovery.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
