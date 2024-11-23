import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const Apps = () => {
  return (
    <div className="bg-[#043873] px-4 py-32 md:px-8 lg:px-16 w-[1,440px] h-[750.8px] top-[5925px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
        {/* Left-side */}
        <div className="flex-shrink-0">
          <Image
            src="/pictures/Apps.png"
            alt="Work Together Image"
            width={582}
            height={470}
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[582px] h-auto"
          />
        </div>

        {/* Right-side */}
        <div className="flex-1 text-center lg:text-left">
          <h1
            className={`${inter.className} font-bold text-[36px] md:text-[48px] lg:text-[62px] leading-tight tracking-[-2%] text-[#FFFFFF]`}
          >
            Work with Your Favorite Apps Using Whitepace
          </h1>
          <p
            className={`${inter.className} mt-4 text-sm md:text-base lg:text-lg leading-6 md:leading-8 text-[#FFFFFF]`}
          >
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <Image
              src="/pictures/Btn-try2.png"
              alt="Get Started"
              width={176}
              height={63}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
