import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import{getImageUrl} from "../../utils";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
            Portofolio
        </a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={menuOpen 
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }alt="Menu Button" onClick={() => setMenuOpen(!menuOpen)}
            /> 
            <ul className={`${styles.menuItems} ${menuOpen&& styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#project">Project</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
