import React from 'react'
import styles from './Certificates.module.css'
import img1 from './img/BasicJavascriptforFrontendDeveloper.jpg'
import img2 from './img/BasicReact1.jpg'
import img3 from './img/BasicReact2.jpg'
import img4 from './img/BasicReact3.jpg'
import img5 from './img/API.jpg'
import img6 from './img/CustomizeCSS.jpg'
import img7 from './img/HTML.jpg'
import img8 from './img/Javascript.jpg'
import img9 from './img/Nodejs.jpg'
import img10 from './img/NoSQLandMongoDB.jpg'
import img11 from './img/RESTAPI.jpg'
import img12 from './img/UX.jpg'
import pdf1 from './pdf/BasicJavascriptforFrontendDeveloper.pdf'
import pdf2 from './pdf/BasicReact1.pdf'
import pdf3 from './pdf/BasicReact2.pdf'
import pdf4 from './pdf/BasicReact3.pdf'
import pdf5 from './pdf/API.pdf'
import pdf6 from './pdf/CSS.pdf'
import pdf7 from './pdf/HTML.pdf'
import pdf8 from './pdf/JavaScript.pdf'
import pdf9 from './pdf/Nodejs.pdf'
import pdf10 from './pdf/NoSQLandMongoDB.pdf'
import pdf11 from './pdf/RESTAPI.pdf'
import pdf12 from './pdf/UX.pdf'
import Tilt from 'react-parallax-tilt';

function Certificate() {
  return (
     <div className={styles.cer_con}>
            <h3 className={styles.cer_title}>Certificates</h3>
            <div className={styles.cer_list}>
            <div className={styles.cer_items}>
               <a href={pdf1} target="_blank">
               <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}> 
                <img src={img1} alt="Basic Javascript for Frontend Developer" />
                </Tilt>
                <p>Basic Javascript for Frontend Developer</p>
                </a> 
            </div>
            <div className={styles.cer_items}>
            <a href={pdf2} target="_blank">
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}> 
                <img src={img2} alt="Basic React 1 Fundamental Knowledge of Components and JSX" />
                </Tilt>
                <p>Basic React 1 Fundamental Knowledge of Components and JSX</p>
            </a>
            </div>
            <div className={styles.cer_items}>
            <a href={pdf3} target="_blank">
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <img src={img3} alt="Basic React 2 Managing State and Events" />
                </Tilt>
                <p>Basic React 2 Managing State and Events</p>
                </a>
            </div>
            <div className={styles.cer_items}>
            <a href={pdf4} target="_blank">
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <img src={img4} alt="Basic React 3 Dynamic Rendering Based on Data Changes" />
                </Tilt>
                <p>Basic React 3 Dynamic Rendering Based on Data Changes</p>
                </a>
            </div>
            <div className={styles.cer_items}>
            <a href={pdf5} target="_blank">
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <img src={img5} alt="Connect a website to data from other sources using an API" />
                </Tilt>
                <p>Connect a website to data from other sources using an API</p>
                </a>
            </div>
            <div className={styles.cer_items}>
            <a href={pdf6} target="_blank">
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <img src={img6} alt="Customize and style the layout of the website using CSS" />
                </Tilt>
                <p>Customize and style the layout of the website using CSS</p>
                </a>
            </div>
            <div className={styles.cer_items}>
            <a href={pdf7} target="_blank">
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <img src={img7} alt="Start building and displaying website content using HTML" />
                </Tilt>
                <p>Start building and displaying website content using HTML</p>
                </a>
            </div>
            <div className={styles.cer_items}>
            <a href={pdf8} target="_blank">
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <img src={img8} alt="Enhance the website with interactive features using JavaScript" />
                </Tilt>
                <p>Enhance the website with interactive features using JavaScript</p>
                </a>
            </div>
            <div className={styles.cer_items}>
            <a href={pdf9} target="_blank">
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <img src={img9} alt="Step into the path of becoming a Back-end Developer with Nodejs" />
                </Tilt>
                <p>Step into the path of becoming a Back-end Developer with Nodejs</p>
                </a>
            </div>
            <div className={styles.cer_items}>
            <a href={pdf10} target="_blank">
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <img src={img10} alt="Manage databases with NoSQL and MongoDB" />
                </Tilt>
                <p>Manage databases with NoSQL and MongoDB</p>
                </a>
            </div>
            <div className={styles.cer_items}>
            <a href={pdf11} target="_blank">
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <img src={img11} alt="Start using a web framework with Express and learn the steps to create a REST API" />
                </Tilt>
                <p>Start using a web framework with Express and learn the steps to create a REST API</p>
                </a>
            </div>
            <div className={styles.cer_items}>
            <a href={pdf12} target="_blank">
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <img src={img12} alt="Design the User Experience (UX) to meet user needs, build a customer base, and create a positive experience" />
                </Tilt>
                <p>Design the User Experience (UX) to meet user needs, build a customer base, and create a positive experience</p>
                </a>
            </div>
        </div>
    
        </div> 
  )
}

export default Certificate