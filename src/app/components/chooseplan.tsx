import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Chooseplan = () => {
  return (
    <div className="px-2 md:px-8 lg:px-2 py-8 overflow-hidden">
      {/* Title Section */}
      <div className="text-center">
      <h2
          className={`${inter.className} relative z-10 font-bold text-[32px] md:text-[48px] lg:text-[72px] leading-[1.2] tracking-[-2%] text-[#212529]`}
        >
          Choose Your Plan
        </h2>
        <Image
          className="-mt-6 ml-96 "
          src="/pictures/yellow-line.png"
          alt="yellow line"
          width={515.61}
          height={36.75}
        ></Image>
        <p
          className={`${inter.className} max-w-[90%] md:max-w-[800px] lg:max-w-[1020px] mx-auto mt-4 text-[16px] md:text-[18px] leading-[1.8] text-[#212529]`}
        >
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>

      {/* Pricing Boards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 overflow-hidden max-w-full">
        <Image
          className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[437px] h-auto"
          src="/pictures/Price-board1.png"
          alt="Basic Plan"
          width={437}
          height={654}
        />
        <Image
          className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[437px] h-auto"
          src="/pictures/Price-board2.png"
          alt="Premium Plan"
          width={437}
          height={700}
        />
        <Image
          className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[437px] h-auto"
          src="/pictures/Price-board3.png"
          alt="Enterprise Plan"
          width={437}
          height={654}
        />
      </div>
    </div>
  );
};

export default Chooseplan;
