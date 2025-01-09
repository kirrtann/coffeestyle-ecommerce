import Link from 'next/link';
import React from 'react'

interface CommonCardProps {
    imageurl: string;
    width: string;
    height: string;
    Name: string;
    deteail: string;
    date: string;
    classname: string

}
const CafeDetail = ({ imageurl, width, height, Name, deteail, date, classname }: CommonCardProps) => {
    const backgroundStyle = {
        backgroundImage: `url(${imageurl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        maxWidth: width,
        height: height,

    }


    return (
        <>
            <div className={classname}>
                <div className="relative  "
                    style={backgroundStyle}
                >
                    <Link href="/" className="pl-10  absolute w-full h-full opacity-0 z-10 transition-opacity duration-300 hover:opacity-100 ">
                        <button className='uppercase bg-white  absolute bottom-5 tracking-[2px] w-[80%] text-[12px] font-bold py-4 px-2  text-black '>
                            read the full story
                        </button>
                    </Link>

                </div>
                <div className='mt-[15px]'>
                    <Link href="/"> <h3 className='text-[#1d1f2e] hover:text-[#a25f4b] text-[20px] mb-[5px] mt-[10px]  '>  {Name} </h3></Link>
                    <p className='text-[16px] mt-[15px] tracking-[1px] opacity-50'>{deteail}</p>
                    <p className='text-[12px] mt-[15px]  opacity-50 tracking-[2px] font-bold'>{date}</p>
                </div>
            </div>
        </>
    )
}

export default CafeDetail