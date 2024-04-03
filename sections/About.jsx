'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="z-0 gradient-02" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Conclave" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Conclave</span> presented by IEDC CEV and IEDC
        COET, invites you to a weekend of professional excellence. Organized by
        the Innovation and Entrepreneurship Development Cell (IEDC), CEV, this
        event goes beyond boundaries, offering a platform where industry
        leaders, professionals, and enthusiasts unite. Immerse yourself in
        insightful sessions, networking, and collaborative activities, elevating
        your journey in the company of visionaries. Join us for a transformative
        experience.{' '}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
