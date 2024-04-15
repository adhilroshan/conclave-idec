'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Events" textStyles="text-center" />
        <TitleText
          title={<>Explore the events <br className="hidden md:block" /> </>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
      <div className='w-full flex justify-center items-center mt-20'>
        <a href="https://www.yepdesk.com/conclave2">
          <p className='text-white hover:bg-slate-700 border-2 border-blue-500 p-4 rounded-3xl'>Buy Ticket</p>
        </a>
      </div>
      <TitleText
        title={<>Shark Hunt <br className="hidden md:block" /> </>}
        textStyles="text-center"
      />
      <div>
        <img className='rounded-xl mt-10' src="banner_shark.png" alt="banner" />
      </div>
      <div className='w-full flex justify-center items-center mt-20'>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1iPvHvbNm9YUNt3yOk7eTkaiavk5dLVxMTFBRv93O1mjLCw/viewform">
          <p className='text-white hover:bg-slate-700 border-2 border-blue-500 p-4 rounded-3xl'>Register Now</p>
        </a>
      </div>
    </section>
  );
};

export default Explore;
