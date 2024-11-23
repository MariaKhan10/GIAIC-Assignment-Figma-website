import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const Yourwork = () => {
  return (
    <div className="bg-[#043873] w-full h-[574px] flex justify-center items-center px-4">
      <div className="text-center max-w-[1064px]">
        <h1
          className={`${inter.className} font-bold text-[36px] md:text-[48px] lg:text-[62px] leading-tight tracking-[-2%] text-[#FFFFFF]`}
        >
          Your work, everywhere you are
        </h1>
        <br/>
       
        <p
          className={`${inter.className} mt-4 text-sm md:text-base lg:text-lg leading-6 md:leading-8 text-[#FFFFFF]`}
        >
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal app
          is also available!
        </p>
        <br/>
        <br/>

        <div className="mt-6 flex justify-center">
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

export default Yourwork;
