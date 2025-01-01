import React from 'react'
import styles from './Information.module.css'
import { FaFacebook,FaLine,FaLocationDot    } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";


function Infomation() {
  return (
    <div className={styles.inf_con}>
        <h3 className={styles.inf_title}>Information</h3>
        <ul className={styles.inf_list}>
          <li><FaLocationDot  /><p>3/32 Soi 5, Saensuk, Mueang Chonburi,<br/>  Chonburi 20130, Thailand</p></li>
          <li><LiaBirthdayCakeSolid/><p>March 4, 1997</p></li>
          <li><a href="tel:090-947-4165"><BsTelephone/><p>090-947-4165</p></a></li>
          <li><a href="mailto:meentrps@gmail.com"><CiMail/><p>meentrps@gmail.com</p></a></li>
          <li><a href="https://www.facebook.com/mtrpny" target="_blank"><FaFacebook/><p>Theerapat Nilyaem</p></a></li>
          <li><a href="https://line.me/ti/p/YpGNhTIees" target="_blank"><FaLine/><p>meentrp.</p></a></li>

        </ul>

    </div>
  )
}

export default Infomation