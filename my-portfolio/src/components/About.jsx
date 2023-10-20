import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { technologies } from '../constants';
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion'

const TechnologiesCard = ({ index, name, icon }) => (
  <Tilt className='xs:w-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='rounded-[15px] border-solid border-2 border-[#7c3aed]'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='px-12 min-h-[200px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-18 h-18  object-contain'
        />

        <h3 className='text-[#faf5ff] text-[20px] font-semibold text-center'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <div className='pt-20'>
      <motion.div variants={textVariant}>
        <p className={styles.heroSubText}>Sobre</p>
        <h2 className={styles.heroHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[16px] max-w-5xl leading-[30px]'
      >
        Sou uma pessoa apaixonada por tecnologia e livros.
        Recentemente me formei em Desenvolvimento Web, com foco em Front-End.
        Possuo conhecimento em TypeScript e JavaScript  e expertise em frameworks
        como React e Three.js. E tenho Habilidades com Ux e Ui Design.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {technologies.map((technologies, index) => (
          <TechnologiesCard key={technologies.title} index={index} {...technologies} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about");