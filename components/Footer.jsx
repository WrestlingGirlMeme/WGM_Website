'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

// Sample social media links
export const socials = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/example', // Replace with your Twitter link
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/example', // Replace with your Facebook link
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/example', // Replace with your Instagram link
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/example', // Replace with your LinkedIn link
  },
];

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse
        </h4>
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=4arWzUHj1ecgyQbKq8Kop76JFnKoLLuxREc428gmpump" target="_blank" rel="noopener noreferrer">
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
            <img
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              Swap on Raydium
            </span>
          </button>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            METAVERUS
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={`/${social.name.toLowerCase()}.svg`} // Assuming you have the logo images in the public folder
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
