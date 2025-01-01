import React, { useState} from 'react'
import styles from './Navbar.module.css'
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaXmark } from 'react-icons/fa6'
function Navbar() {
    
const [isToggled,setToggle] = useState(false);

function handleToggle(){
    setToggle(!isToggled)
}
  return (

    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
          <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
              >RESUME</ScrollLink>
          </div>
          <ul>
            <li>
              <ScrollLink
                to="Information"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Infomation
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Skills"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Experiance"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Work Experiant
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Educations"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Education
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Certificates"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Certificates
              </ScrollLink>
            </li>
          </ul>
        </div>
        {isToggled ? (
  <FaXmark
    className={`${styles.bars} ${isToggled ? styles.open : ""}`}
    onClick={handleToggle}
  />
) : (
  <FaBars
    className={`${styles.bars} ${!isToggled ? styles.closed : ""}`}
    onClick={handleToggle}
  />
)}
            {isToggled ?(
                <>
                    <ul className={styles.mobile_menu}>
                    <li>
              <ScrollLink
                to="Information"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Infomation
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Skills"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Experiance"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Work Experiant
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Educations"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Education
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Certificates"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Certificates
              </ScrollLink>
            </li>
          </ul>
                </>
            ): null}
      </div>
    </nav>
  )
}

export default Navbar