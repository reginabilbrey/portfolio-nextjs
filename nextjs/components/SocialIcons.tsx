import Image from "next/image"
import styles from "@/app/projects/page.module.css"

import linkedin from "@/assets/images/linkedin.svg"
import instagram from "@/assets/images/instagram.svg"
import facebook from "@/assets/images/facebook.svg"

export default function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      <a href="https://www.linkedin.com/in/regina-bilbrey" target="_blank">
        <Image src={linkedin} alt="LinkedIn" />
      </a>

      <a href="https://www.instagram.com/grit.graphix" target="_blank">
        <Image src={instagram} alt="Instagram" />
      </a>

      <a href="http://facebook.com/gritgraphix" target="_blank">
        <Image src={facebook} alt="Facebook" />
      </a>
    </div>
  )
}