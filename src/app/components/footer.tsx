import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="bg-[#043873] text-[#FFFFFF]">
      {/* Top section */}
      <div className="flex flex-wrap justify-between px-6 md:px-8 pt-[80px] md:pt-[140px] pb-8 gap-y-8">
        {/* Column 1: Logo and description */}
        <div className="flex-1 min-w-[250px]">
          <Image src="/pictures/Logo2.png" alt="logo" width={191} height={34} />
          <p
            className={`${inter.className} font-normal text-[16px] md:text-[18px] leading-[1.8] mt-4`}
          >
            Whitepace was created for the new ways we live and work. We make a
            better workspace around the world.
          </p>
        </div>

        {/* Column 2: Product */}
        <div className="flex-1 min-w-[150px]">
          <p className={`${inter.className} font-bold text-[18px] mb-4`}>
            Product
          </p>
          <ul className="space-y-2">
            <li className={`${inter.className} text-[16px] text-[#FFE492]`}>
              Overview
            </li>
            <li className={`${inter.className} text-[16px]`}>Pricing</li>
            <li className={`${inter.className} text-[16px]`}>Customer stories</li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className="flex-1 min-w-[150px]">
          <p className={`${inter.className} font-bold text-[18px] mb-4`}>
            Resources
          </p>
          <ul className="space-y-2">
            <li className={`${inter.className} text-[16px]`}>Blog</li>
            <li className={`${inter.className} text-[16px]`}>Guides & tutorials</li>
            <li className={`${inter.className} text-[16px]`}>Help center</li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div className="flex-1 min-w-[150px]">
          <p className={`${inter.className} font-bold text-[18px] mb-4`}>
            Company
          </p>
          <ul className="space-y-2">
            <li className={`${inter.className} text-[16px]`}>About us</li>
            <li className={`${inter.className} text-[16px]`}>Careers</li>
            <li className={`${inter.className} text-[16px]`}>Media kit</li>
          </ul>
        </div>

        {/* Column 5: Try It Today */}
        <div className="flex-1 min-w-[250px]">
          <h5 className={`${inter.className} font-bold text-[24px] md:text-[28px] mb-4`}>
            Try It Today
          </h5>
          <p className={`${inter.className} text-[16px] mb-4`}>
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button>
            <Image
              src="/pictures/Btn-try4.png"
              alt="button"
              width={186}
              height={60}
            />
          </button>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="border-t border-[#2E4E73] mx-6 md:mx-8"></div>

      {/* Bottom section */}
      <div className="flex flex-wrap justify-between items-center px-6 md:px-8 py-4 gap-y-4">
        {/* Left: Language and links */}
        <div className="flex flex-wrap gap-4">
          <Image
            src="/pictures/Language.png"
            alt="English"
            width={104}
            height={20}
          />
          <p className={`${inter.className} text-[16px]`}>Terms & privacy</p>
          <p className={`${inter.className} text-[16px]`}>Security</p>
          <p className={`${inter.className} text-[16px]`}>Status</p>
          <p className={`${inter.className} text-[16px]`}>©2021 Whitepace LLC</p>
        </div>

        {/* Right: Social media icons */}
        <div className="flex gap-6">
          <Image
            src="/pictures/_x30_1._Facebook.png"
            alt="Facebook"
            width={9}
            height={16.68}
          />
          <Image
            src="/pictures/Group.png"
            alt="Twitter"
            width={17}
            height={13.81}
          />
          <Image
            src="/pictures/Linkedin.png"
            alt="LinkedIn"
            width={15}
            height={15}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
