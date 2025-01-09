import React from 'react';
import Link from 'next/link';

interface Propss {
  imageurl: string;
  width: string;
  height: string;
  Name: string;
  price: number;
}

const CommonCard: React.FC<Propss> = ({ imageurl, width, height, Name, price }) => {
  const backgroundStyle = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    width: width,
    height: height,
  };

  return (
    <div>
      <div className="relative" style={backgroundStyle}>
        <Link
          href="/"
          className="absolute w-full h-full opacity-0 z-10 transition-opacity duration-300 hover:opacity-100"
        >
          <button className="uppercase bg-white absolute bottom-5 tracking-[2px] w-[80%] text-[12px] font-bold py-4 px-2 ml-10 mt-10 text-black">
            explore mug
          </button>
        </Link>
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-[#1d1f2e] text-[20px] mb-[5px] mt-[10px]">{Name}</h3>
        <p className="text-[16px] text-[#1d1f2e] mb-[15px]">${price} USD</p>
      </div>
    </div>
  );
};

export default CommonCard;
