import React from 'react'

interface CommonCardProps {
    imageurl: string;
    Name: string;
    width: string;
    height: string;
    position: string;

}

const Introductions = ({ imageurl, Name, width, height, position }: CommonCardProps) => {

    const backgroundstle = {
        backgroundImage: `url(${imageurl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        width: width,
        height: height

    }
    return (
        <>
            <div className='px-[5px] text-center '>
                <div style={backgroundstle} className='mb-[25px]' >
                </div>
                <div className=''>
                    <h3 className='text-[20px]  my-[10px]'>{Name}</h3>
                    <p className='text-[12px] uppercase opacity-65 tracking-[2px] font-bold '>{position}</p>
                </div>
            </div>



        </>
    )
}

export default Introductions