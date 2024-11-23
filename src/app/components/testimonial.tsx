import Image from 'next/image';
import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Testimonial = () => {
  return (
    <div className="py-28 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-8">
      <h2
          className={`${inter.className} relative z-10 font-bold text-[32px] md:text-[48px] lg:text-[72px] leading-[1.2] tracking-[-2%] text-[#212529]`}
        >
          See what our trusted users Say
        </h2>
        <Image
          className="-mt-6"
          src="/pictures/yellow-line.png"
          alt="yellow line"
          width={515.61}
          height={36.75}
        ></Image>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Image
          src="/pictures/Client1.png"
          alt="Client Testimonial 1"
          width={437}
          height={480}
          className="w-full h-auto object-cover shadow-lg rounded-lg"
        />
        <Image
          src="/pictures/Client2.png"
          alt="Client Testimonial 2"
          width={437}
          height={480}
          className="w-full h-auto object-cover shadow-lg rounded-lg"
        />
        <Image
          src="/pictures/Client3.png"
          alt="Client Testimonial 3"
          width={437}
          height={480}
          className="w-full h-auto object-cover shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default Testimonial;
