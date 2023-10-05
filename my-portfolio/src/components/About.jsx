import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { technologies } from '../constants';
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion'

const TechnologiesCard  = ({ index, name, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.heroSubText}>Introdução</p>
        <h2 className={styles.heroHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Sou uma pessoa apaixonada por tecnologia e livros.
        Recentemente me formei em Desenvolvimento Web, com foco em Front-End.
        Possuo conhecimento em TypeScript e JavaScript  e expertise em frameworks
        como React, e Three.js. E tenho Habilidades com Ux e Ui Design.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {technologies.map((technologies, index) => (
          <TechnologiesCard key={technologies.title} index={index} {...technologies} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");