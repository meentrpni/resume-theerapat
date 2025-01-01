import React from 'react'
import styles from './Experiance.module.css'
function Experiance() {
  return (
    <div className={styles.exp_con}>
    <h3 className={styles.exp_title}>Work Experiances</h3>
    <div className={styles.exp_list}>
        <div className={styles.exp_items}>
            
            <h4>Navajak Automation</h4>
            <strong><p>2023 - Now Chonburi, Thailand </p></strong>
            <p><strong>Position:</strong> Engineer & Programmer(IOT)</p>
            <ul>
                <li>Design electrical drawings and prepare wiring for devices.</li>
                <li>Assemble and wire control cabinets.</li>
                <li>Program and configure HMI systems</li>
                <li>Oversee installation and wiring at the job site.</li>
                <li>Perform system testing for functionality and performance.</li>
                <li>Develop an IoT system for remote control and monitoring of devices via mobile app and web browser</li>
            </ul>
        </div>
        <div className={styles.exp_items}>
            
            <h4>Marketing Bear</h4>
            <strong><p>2022-2023 Bangkok, Thailand</p></strong>
            <p><strong>Position:</strong> Web Developer</p>
            <ul>
                <li>Design and develop dynamic and user-friendly website pages using WordPress, JavaScript, CSS, and HTML.</li>
                <li>Optimize websites for performance, responsiveness, and seamless user experience across devices.</li>
                <li>Ensure the implementation of modern design principles and best practices for web development.</li>
            </ul>
            </div>
        <div className={styles.exp_items}>
            
            <h4>Navajak Automation</h4>
            <strong><p>2018-2022 - Now Chonburi, Thailand </p></strong>
            <p><strong>Position:</strong> Engineer & Programmer</p>
            <ul>
                <li>Design electrical drawings and prepare wiring for devices.</li>
                <li>Assemble and wire control cabinets.</li>
                <li>Program and configure HMI systems</li>
                <li>Oversee installation and wiring at the job site.</li>
                <li>Perform system testing for functionality and performance.</li>
                <li>Develop an IoT system for remote control and monitoring of devices via mobile app and web browser</li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Experiance