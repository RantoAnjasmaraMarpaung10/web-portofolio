import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.Content} id='about'>
        <h2 className={styles.Title}>About Me</h2>
        <div>
            <p className={styles.Text}>
            Ranto is a third year informatics engineering student at the University of Riau who likes to learn new things. With experience in front-end 
            development and UI/UX design, Ranto is excited to pursue opportunities as a web developer. Ranto is enthusiastic about learning and 
            collaborating in a team to develop innovative web applications.
            </p>
        </div>
    </section>
  )
}
