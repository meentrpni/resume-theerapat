import React from 'react'
import styles from './Skills.module.css'
import {FaSquareJs, FaReact, FaHtml5, FaCss3Alt,  FaGitAlt, FaGithub, FaDatabase,FaWordpress    } from 'react-icons/fa6'
import { BsFiletypeSql } from "react-icons/bs";

function Skills() {
  return (
    <div className={styles.skills_con}>
    <h3 className={styles.skills_title}>My Skills</h3>
    <ul className={styles.skills_list}>
        <li><FaSquareJs/></li>
        <li><FaHtml5 /></li>
        <li><FaCss3Alt/></li>
        <li><FaReact/></li>
        <li><FaGithub /></li>
    </ul>
    <ul className={styles.skills_list}>
        <li><FaWordpress /></li>
        <li><FaDatabase/></li>
        <li><BsFiletypeSql /></li>

    </ul>

</div>
  )
}

export default Skills