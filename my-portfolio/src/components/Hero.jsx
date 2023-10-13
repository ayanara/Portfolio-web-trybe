import { motion } from 'framer-motion';


import { styles } from '../styles';

const Hero = () => {
  return (
    <section className='relative h-screen  flex justify-center '>
      <div className={`absolute top-[280px] ${styles.paddingX}`}>
        <div className='flex flex-col justify-center items-center mt-2'>
          {/* <div className='w-5 h-5 rounded-full bg-[#7c3aed]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' /> */}
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white text-center`}>
            Olá! Eu sou  <span className='text-[#7c3aed]'> Ayanara Nathane.</span>
          </h1>
          <h1 className={`text-center mt-10  ${styles.heroSubText2} text-white `} >Desenvolvedora Front End</h1>
          <p className={`mt-10 text-center text-white ${styles.heroSubText}`}>
            Sou uma pessoa apaixonada por tecnologia e livros. Recentemente me formei em Desenvolvimento Web,
            <  br /> com foco em <span className='text-[#7c3aed]'>Front End</span>. Possuo conhecimento em TypeScript, JavaScript e expertise em
            <  br />frameworks como React e Three.js. E tenho Habilidades com <span className='text-[#7c3aed]'>Ux e Ui Design</span>
            <  br />Crio interfaces que são intuitivas, inclusivas e esteticamente agradáveis, e sempre tenho como foco principal a  <span className='text-[#7c3aed]'>Usabilidade</span> .
          </p>

          <div className='flex justify-center items-center mt-20'>
            <a href='https://www.linkedin.com/in/ayanara/'
              target='_blank'
              rel="noreferrer"
              className=' mx-2'
            >
              <box-icon type="logo" name="linkedin" color="white"></box-icon>
            </a>

            <a href='https://github.com/ayanara'
              target='_blank'
              rel="noreferrer"
              className=' mx-2'
            >
              <box-icon type="logo" name="github" color="white"></box-icon>
            </a>

            <a href='https://aya-nathane.medium.com/'
              target='_blank'
              rel="noreferrer"
              className=' mx-2'
            >
              <box-icon type="logo" name="medium" color="white"></box-icon>
            </a>

            <a href='https://www.behance.net/ayanaranathane/'
              target='_blank'
              rel="noreferrer"
              className=' mx-2'
            >
              <box-icon type="logo" name="behance" color="white"></box-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero