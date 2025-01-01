import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook,FaLine    } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
function Footer() {
  return (
        <footer >
            <p>Copyright © 2025. All Rights Reserved.</p>
            <ul>
              <li><a href="tel:090-947-4165"><BsTelephone/><span>090-947-4165</span></a></li>
              <li><a href="mailto:meentrps@gmail.com"><CiMail/><span>meentrps@gmail.com</span></a></li>
              <li><a href="https://www.facebook.com/mtrpny" target="_blank"><FaFacebook/><span>Theerapat Nilyaem</span></a></li>
              <li><a href="https://line.me/ti/p/YpGNhTIees" target="_blank"><FaLine/><span>meentrp.</span></a></li>
    
            </ul>
    
        </footer>
  )
}

export default Footer