import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const Hero = () => {
  return (
    <div className="bg-[#043873] text-[#FFFFFF] w-full h-auto top-[92px] py-[50px] px-[16px] md:py-[100px] md:px-[32px] flex flex-col-reverse md:flex-row items-center justify-center gap-8">
      {/* Left side */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2
          style={{ letterSpacing: '-0.02em' }}
          className={`${inter.className} font-bold text-[32px] md:text-[48px] lg:text-[64px] leading-[1.2] tracking-[-2%] text-[#FFFFFF]`}
        >
          Get More Done with whitespace
        </h2>
        <p
          style={{ letterSpacing: '-0.02em' }}
          className={`${inter.className} mt-4 text-[14px] md:text-[16px] lg:text-[18px] leading-6 md:leading-8 tracking-[-2%] text-[#FFFFFF]`}
        >
          Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
        </p>
        <button className="mt-6">
          <Image
            className="mx-auto md:mx-0"
            src="/pictures/Btn-free-trial.png"
            alt="button"
            width={219}
            height={63}
          />
        </button>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2">
        <Image
          src="/pictures/Image-container1.png"
          alt="button"
          className="w-full h-auto"
          width={685}
          height={456.39}
        />
      </div>
    </div>
  );
};

export default Hero;
