import Image from 'next/image';
import React from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const YourData = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full h-auto lg:h-[759px] py-[140px] px-[32px] gap-[98px]">
      {/* Left-side */}
      <div className="flex-1 text-center lg:text-left">
      <h2
          className={`${inter.className} relative z-10 font-bold text-[32px] md:text-[48px] lg:text-[72px] leading-[1.2] tracking-[-2%] text-[#212529]`}
        >
          100% your data
        </h2>
        <Image
          className="-mt-6"
          src="/pictures/yellow-line.png"
          alt="yellow line"
          width={515.61}
          height={36.75}
        ></Image>
        <p
          className={`${inter.className} mt-6 text-[16px] md:text-[18px] leading-[1.8] text-[#212529]`}
        >
          The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
        </p>
        <div className="mt-6">
          <br/>
          <br/>
          
          <button>
            <Image
              src="/pictures/Btn-try.png"
              alt="Get Started"
              width={176}
              height={63}
            />
          </button>
        </div>
      </div>

      {/* Right-side */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/pictures/Element.png"
          alt="Image Container"
          width={685}
          height={456.39}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default YourData;
