import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container} id='home'>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ranto Anjasmara Marpaung</h1>
        <p className={styles.description}>I am a web developer with experience using HTML, CSS, JavaScript, Bootstrap, and React JS
        </p>
        <a className={styles.contactBtn} href="mailto:rantoanjasmaramarpaung@gmail.com">Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image of Me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
  )
}
