import Image from 'next/image';
import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Oursponsors = () => {
  return (
    <div className="py-8 px-4 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center">
      <h2
          className={`${inter.className} relative z-10 font-bold text-[32px] md:text-[48px] lg:text-[72px] leading-[1.2] tracking-[-2%] text-[#212529]`}
        >
          Our Sponsors
        </h2>
        <Image
          className="-mt-6"
          src="/pictures/yellow-line.png"
          alt="yellow line"
          width={515.61}
          height={36.75}
        ></Image>
      </div>

      {/* Sponsors Images */}
      <div className="py-7 flex flex-wrap justify-center items-center gap-6 lg:gap-28 mt-8">
        <Image
          src="/pictures/Apple.png"
          alt="Apple"
          width={55}
          height={68}
          className="w-[50px] md:w-[80px] lg:w-[100px] h-auto"
        />
        <Image
          src="/pictures/microsoft 1.png"
          alt="Microsoft"
          width={287}
          height={62}
          className="w-[150px] md:w-[200px] lg:w-[287px] h-auto"
        />
        <Image
          src="/pictures/Slack_Technologies_Logo 1.png"
          alt="Slack"
          width={280}
          height={71}
          className="w-[140px] md:w-[200px] lg:w-[280px] h-auto"
        />
        <Image
          src="/pictures/Group 246.png"
          alt="Group"
          width={211}
          height={70}
          className="w-[130px] md:w-[180px] lg:w-[211px] h-auto"
        />
      </div>
    </div>
  );
};

export default Oursponsors;
