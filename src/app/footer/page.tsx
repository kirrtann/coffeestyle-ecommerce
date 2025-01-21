import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='max-w-[940px] mx-auto mb-[100px] '>
                <div className='grid lg:grid-cols-4 gap-5 sm:grid-cols-2 md:grid-cols-3 text-center justify-center '>

                    <div className='opacity-60'>
                        <Image src="/loga.png" alt="logo" width={112} height={50} className='w-[112px] mb-[10px] ' />
                        <p className='text-[14px] mb-[10px]'>Delivering the best coffee life since 1996. From coffee geeks to the real ones.</p>
                        <p className='text-[14px] px[10px]'>CoffeeStyle Inc. © 1996</p>

                    </div>
                    <div className=''>
                        <p className='tracking-[2px] uppercase text-[12px] font-bold mb-[15px] opacity-60 '>MENU</p>
                        <ul className='text-[14px] opacity-60 space-y-2 '>
                            <li>Home</li>
                            <li>our Product</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <p className='tracking-[2px] uppercase text-[12px] font-bold mb-[15px] opacity-60 '>Follow Us</p>
                        <ul className='text-[14px] opacity-60 space-y-2 '>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Pinterest</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div>
                        <div className='tracking-[2px] uppercase text-[12px] font-bold mb-[15px] opacity-60 '>
                            contacy us
                        </div>
                        <div>
                            <p className='text-[14px] opacity-60'>
                            We’re Always Happy to Help
                            </p>
                            <div className='text-[24px]'>
                                us@CoffeeStyle.io
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer