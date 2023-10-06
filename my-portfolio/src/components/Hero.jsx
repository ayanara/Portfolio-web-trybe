import { motion } from 'framer-motion';

import { styles } from '../styles';

import real_time from '../../public/desktop_pc/real_time.png';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto bg-[#fdfdfd]'>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto 
      ${styles.paddingX} flex flex-row items-start gap-10`}>
        <div className='flex flex-col justify-center items-center mt-1'>
          <div className='w-5 h-5 rounded-full bg-[#7c3aed]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroSubText} text-[#58585D]`}>
            Olá! Eu sou
          </h1>
          <h1 className={`${styles.heroHeadText} text-[#58585D]`}>
            Ayanara <span className='text-[#7c3aed]'>Nathane.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#58585D]`}>
            Sou <span className='text-[#7c3aed]'>Desenvolvedora Front End</span>, apaixonado por criar interfaces web<br className='sm:block hidden' />
            que sejam bonitas, funcionais e acessíveis.
          </p>
          <img src={real_time}
            alt='Real time Sync'
            width='700px'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero