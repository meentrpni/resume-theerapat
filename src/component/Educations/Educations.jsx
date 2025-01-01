import React from 'react'
import styles from './Educations.module.css'
function Educations() {
  return (
   <div className={styles.edt_con}>
       <h3 className={styles.edt_title}>Educations</h3>
       <div className={styles.edt_list}>
           <div className={styles.edt_items}>
               <h4>Kasetsart University, Sriracha Campus</h4>
               <p><strong>2015 - 2018</strong> Bachelor's Degree in Computer Science</p>
           </div>
           <div className={styles.edt_items}>  
               <h4>Sriracha School</h4>
               <p><strong>2014 - 2015</strong> Science-Mathematics Program</p>
            </div>
            <div className={styles.edt_items}>  
               <h4>Chonkanyanukoon Saensuk School</h4>
               <p><strong>2013</strong> Science-Mathematics Program</p>
            </div>
       </div>
   </div>
  )
}
export default Educations