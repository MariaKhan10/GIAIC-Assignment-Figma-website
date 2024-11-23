import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center h-[92px] justify-between py-[16px] px-[40px]">
      {/* Logo */}
      <div className="mr-4"> {/* Added margin-right for spacing */}
        <Image src="/pictures/Logo.png" alt="logo" width={191} height={34} />
      </div>
      
      {/* Full menu image (visible on medium to large screens) */}
      <div className="hidden md:block">
        <Image src="/pictures/Frame 375.png" alt="menu" width={928.5} height={60} />
      </div>
      
      {/* Hamburger icon (visible on small screens) */}
      <div className="block md:hidden ml-4"> {/* Added margin-left for spacing */}
        <Image src="/pictures/hamburger.png" alt="menu" width={40} height={40} />
      </div>
    </div>
  );
};

export default Header;
