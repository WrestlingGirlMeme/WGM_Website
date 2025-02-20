'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Smashing around the world" textStyles="text-center" />
      <TitleText
        title={(
          <> $WGM is Smashing the world of meme 
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="pepe.png" alt="pepe" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-[55%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="floki2.png" alt="floki" className="w-full h-full" /> 
           </div>

        <div className="absolute top-20 left-[13%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/trump.png" alt="trump" className="w-full h-full" />
        </div>

        <div className="absolute top-2/3 left-[15%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="shiba1.png" alt="shiba" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="doge1.png" alt="doge" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
