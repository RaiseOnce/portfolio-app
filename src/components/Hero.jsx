import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { hero } from '../assets'
import { TypeAnimation } from 'react-type-animation'

const HeroAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Elias',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Developer',
        2000,
        'Freelancer',
        2000,
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
    />
  )
}

const Hero = () => {
  return (
    <section
      className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
    >
      <div className={`flex gap-[25px]`}>
        <div
          className={`pt-[175px] inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="hero-content">
            <h1 className={`hero-header text-white mb-[32px]`}>
              Hi, I'am{' '}
              <span className="hero-span">
                <HeroAnimation />
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I create websites to solve{' '}
              <span className="hero-text">business problems</span>, not to add
              new ones to it
            </p>
            <div className="hero-btns">
              <a href="#contact" className="hero-hire">
                Hire Me
              </a>
              <a
                className="hero-cv"
                href="https://docs.google.com/document/d/13X61NcPOXrCFpncjqlFleV2yzMDHFBGIo9JVjFyHMOQ/edit?usp=sharing"
                target="_blank"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image w-[600px] pt-[100px]">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero

{
  /* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white mb-5`}>
            Hi, I'm <span className="text-[#915eff]">Ilyas</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I create websites to solve business problems,{' '}
            <br className="sm:block hidden" /> not to add new ones to it
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[34px] h-[64px] rounded-3xl border border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div> */
}
