'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          <p className="text-7xl">IEDC CEV</p>
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
          <h1 className={styles.heroHeading}>
            <p className="pb-20 text-4xl">Presents</p>
          </h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/conclave banner.jpg"
          alt="hero_cover"
          className="w-full sm:h-[650px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

      </motion.div>
    </motion.div>
  </section>
);
// export default Hero;

// const Hero = () => {
//   return (
//     <section className="h-screen space-y-5 text-white flex flex-col items-center">
//       <p className="text-9xl font-extrabold">
//         Conclave 2024
//       </p>
//       <p className="text-2xl">
//         April 18 | College of Engineering, Vadakara
//       </p>
//     </section>
//   )
// }

// export default Hero;
