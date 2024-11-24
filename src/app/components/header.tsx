import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className="bg-[#043873] flex items-center h-[92px] justify-between py-[16px] px-[40px]">
      {/* Logo */}
      <div className="text-[#FFFFFF] mr-4"> {/* Added margin-right for spacing */}
      <Image
        className="w-[120px] h-auto md:w-[191px] md:h-[34px]"
        src="/pictures/Logo.png"
        alt="logo"
        width={191}
        height={34}
      />
      </div>
      
      {/* Full menu image (visible on medium to large screens) */}
      <div className="text-[#FFFFFF] hidden md:block">
        <Image src="/pictures/Frame 375.png" alt="menu" width={928.5} height={60} />
      </div>
      
      {/* Hamburger icon (visible on small screens) */}
      <div className="text-[#FFFFFF] block md:hidden ml-4"> {/* Added margin-left for spacing */}
        <Image src="/pictures/hamburger.png" alt="menu" width={40} height={40} />
      </div>
    </div>
  );
};

export default Header;
