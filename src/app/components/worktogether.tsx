import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const Worktogether = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5 lg:gap-10 mt-14">
      {/* Left-side */}
      <div className="flex-1">
        <Image
          src="/pictures/Work Together Image.png"
          alt="Work Together Image"
          width={450}
          height={450}
          className="w-full h-auto"
        />
      </div>

      {/* Right-side */}
      <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
      <h2
          className={`${inter.className} relative z-10 font-bold text-[32px] md:text-[48px] lg:text-[72px] leading-[1.2] tracking-[-2%] text-[#212529]`}
        >
          Work Together
        </h2>
        <Image
          className="-mt-6"
          src="/pictures/yellow-line.png"
          alt="yellow line"
          width={515.61}
          height={36.75}
        ></Image>
        <p
          className={`${inter.className} mt-4 text-sm md:text-base lg:text-lg leading-6 md:leading-8 text-[#212529]`}
        >
          With whitespace, share your notes with your colleagues and collaborate
          on them. You can also publish a note to the internet and share the
          URL with others.
        </p>
        <div className="mt-6">
          <Image
            src="/pictures/Btn-get-started2.png"
            alt="Get Started"
            width={219}
            height={63}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Worktogether;
