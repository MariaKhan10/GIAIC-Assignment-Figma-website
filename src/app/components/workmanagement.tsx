import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Workmanagement = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full h-auto lg:h-[759px] py-[140px] px-[32px] gap-[98px]">
      {/* Left-side */}
      <div className="flex-1 text-center lg:text-left">
        <h2
          className={`${inter.className} relative z-10 font-bold text-[32px] md:text-[48px] lg:text-[72px] leading-[1.2] tracking-[-2%] text-[#212529]`}
        >
          Project Management
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
          Images, videos, PDFs and audio files are supported. Create math
          expressions and diagrams directly from the app. Take photos with the
          mobile app and save them to a note.
        </p>
        <br />
        <br />
        <br />

        <div className="flex justify-center lg:justify-start">
          <button>
            <Image
              src="/pictures/Btn-get-started1.png"
              alt="button"
              className="w-[200px] h-auto"
              width={219}
              height={63}
            />
          </button>
        </div>
      </div>

      {/* Right-side */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/pictures/Image-container1.png"
          alt="image"
          className="w-full max-w-[619px] h-auto"
          width={619}
          height={348}
        />
      </div>
    </div>
  );
};

export default Workmanagement;
