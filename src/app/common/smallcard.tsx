import Link from 'next/link';
import React from 'react'
interface CommonCardProps {
    imageurl: string;
    Name: string;
    width: string;
    height: string;


}
const SmallCard = ({ imageurl, Name ,width,height}: CommonCardProps) => {
    const backgroundStyle = {
        backgroundImage: `url(${imageurl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        width: width,
        height: height

    }
    return (
        <>
            <div className='border-l-[2px] mb-[10px] border-[#a25f4b]  hover:opacity-95 ' >
                <Link href="" className='flex items-center pl-[20px] py-[8px] '>
                    <div style={backgroundStyle} className=''>

                    </div><h3 className='text-[16px] pl-[20px] py-[8px]   '>{Name}</h3>
                </Link>
            </div>
        </>
    )
}

export default SmallCard;