import React from 'react'
import styles from './Hero.module.css'
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from 'react-type-animation';
function Hero() {
  return (
    <div className={styles.hero_wrapper}>
    <div className={styles.container}>
        <div className={styles.hero_con}>
            <div className={styles.hero_info}>
                <p className={styles.text_1}>Hi, it's me</p>
                <h3 className={styles.text_2}>Theerapat Nilyaem</h3>
                <p className={styles.text_3}>
                    <span style={{marginRight:'10px'}}>I’m a </span><TypeAnimation
          sequence={[
            'Engineer Programmer',
        1000,
        'Front-end Developer',
        1000,
        'Web Developer',
        1000,
      ]}
      speed={50}
      repeat={Infinity}
    />
                   </p>
                <p className={styles.text_4}>I am an enthusiastic self-learner transitioning into software development, with a strong foundation in problem-solving and programming gained through academic projects and personal study. Skilled in web technologies, and eager to apply these skills to develop impactful software solutions.</p>
            </div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <div className={styles.hero_img}></div>
            </Tilt>
        </div>
    </div>
</div>
  )
}

export default Hero