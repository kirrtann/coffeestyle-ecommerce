"use client"
import React, { useEffect } from 'react'
import Subscribe from '../common/subcribeplan'
import Footer from '../footer/page'

const Contact = () => {
     useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-element');
    
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fadeInTransform');
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.1,
        });
    
        fadeElements.forEach(element => observer.observe(element));
    
        return () => {
          fadeElements.forEach(element => observer.unobserve(element));
        };
      }, []);
    return (
        <>
            <div>
                <div className='max-w-[1440px] mx-auto py-[105px] bg-[#f6f6f6] '>
                    <div className='max-w-[940px] mx-auto text-center'>
                        <div className='w-[60%] mx-auto'>
                            <h1 className='mt-[10px] mb-[15px] text-[36px]'>Let's Connect</h1>
                            <p className='opacity-60 text-[18px] tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis.</p>
                        </div>
                        <div className='text-[12px] tracking-[2px] uppercase font-bold opacity-60  my-[100px] '>
                            Our Offices
                        </div>
                    </div>
                </div>
                <div>
                    <div className='max-w-[960px] mx-auto mt-[-100px] place-items-center  mb-[100px] sm:flex flex-wrap'>
                        <div className='w-[50%]  px-[10px] '>
                            <div className='bg-[url("https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7abd9eecdfb6_California%20Office.jpg")] bg-cover mb-[40px] h-[200px] '>
                            </div>
                            <div className='text-center'>
                                <p className='text-[12px] opacity-60 tracking-[2px] font-bold uppercase mb-[10px] '>United Kingdom</p>
                                <p className='text-[18px] mb-[10px]'>Canary Wharf, London</p>
                                <p className='opacity-60 mb-[15px] leading-7'>Jubilee Place <br />
                                    London <br />
                                    E14 5NY</p>
                                <p className='text-[12px] opacity-60 tracking-[2px] font-bold uppercase mb-[10px]'> Opening Times</p>
                                <p className='text-[16px] opacity-60 mb-[10px] leading-7'>
                                    Mon - Fri 08:00 to 22:00 <br />
                                    Sat - 09:00 to 20:00 <br />
                                    Sun - 12:00 to 18:00</p>
                            </div>
                        </div>
                        <div className='w-[50%] px-[10px] '>
                            <div className='bg-[url("https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a2c8decdfb7_London%20Office.jpg")] bg-cover mb-[40px] h-[200px] '>
                            </div>
                            <div className='text-center'>
                                <p className='text-[12px] opacity-60 tracking-[2px] font-bold uppercase mb-[10px] '>United States</p>
                                <p className='text-[18px] mb-[10px]'>Venice Beach, California</p>
                                <p className='opacity-60 mb-[15px] leading-7'>9219 Old Kingston Street South <br />
                                    El Monte, CA <br />
                                    91733</p>
                                <p className='text-[12px] opacity-60 tracking-[2px] font-bold uppercase mb-[10px]'> Opening Times</p>
                                <p className='text-[16px] opacity-60 mb-[10px] leading-7'>
                                    Mon - Fri 08:00 to 22:00 <br />
                                    Sat - 09:00 to 20:00 <br />
                                    Sun - 12:00 to 18:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[940px] mx-auto p-[20px] fade-element  md:p-[60px] flex border flex-wrap justify-center '>
                    <div className='md:w-[60%] md:border-r border-b pb-[10px]  md:pr-[60px] md:mr-[60px] '>
                        <p className='text-[12px] opacity-60 font-bold tracking-[2px] uppercase mb-[10px]'>  Contact form </p>
                        <p className='text-[18px] mb-[25px]'> Drop us your message and I'll get back to you as soon as possible.</p>
                        <div className='  '>
                            <form className='uppercase tracking-[2px] text-[12px] font-bold opacity-60 '>
                                <label htmlFor="" className='mt-[10px]'>Name</label><br />
                                <input type="text" className='border-black border-[1px] mt-[10px]  w-full py-[18px] px-[24px] opacity-60 hover:opacity-100 mb-[20px]' placeholder='james coffee' /> <br />
                                <label htmlFor="">Email Address</label> <br />
                                <input type="text" className='border-black border-[1px]  mt-[10px] w-full py-[18px] px-[24px] opacity-60 hover:opacity-100 mb-[20px]' placeholder='customer@coffeestyle.io' /> <br />
                                <label htmlFor="">your message</label><br />
                                <textarea name="" id=" " className='border-black border-[1px]  mt-[10px] w-full py-[18px] px-[24px] opacity-60 hover:opacity-100 mb-[20px]' placeholder='Hi! I would like to ask something about mugs.'></textarea> <br />
                            </form>
                            <button className='bg-[#1d1f2e] opacity-100 text-white py-[18px] px-[24px] uppercase text-[12px] tracking-[2px] font-bold' > send message</button>
                        </div>
                    </div>
                    <div>
                        <p className='text-[12px] opacity-60 font-bold tracking-[2px] uppercase mb-[10px]'>Contact Form</p>
                        <p className='text-[18px] mb-[10px]'>CoffeeStyle. Inc</p>
                        <p className='text-[16px] mb-[15px] opacity-60'>Pride Ave,
                            Hamlyn Heights <br />
                            VIC 3215br <br />
                            Australia</p>
                        <div className='mb-[40px]'>
                            <p className='text-[12px] opacity-60 font-bold tracking-[2px] uppercase mb-[10px]'>Call US</p>
                            <p >+1 (415) 555-1212</p>
                        </div>
                        <div className='mb-[40px]'>
                            <p className='text-[12px] opacity-60 font-bold tracking-[2px] uppercase mb-[10px]'>Email Us</p>
                            <p className='text-[18px]'>us@coffeestyle.io</p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[940px] mx-auto mt-[100px] fade-element text-center'>
                    <div className='text-[12px] opacity-60 font-bold tracking-[2px] mb-[100px] uppercase'>
                        Directory
                    </div>
                    <div className='grid md:grid-cols-3 gap-[10px] '>
                        <div className='text-[12px] opacity-60 font-bold tracking-[2px] uppercase'>press</div>
                        <div className='text-[18px]'>Robb kohler</div>
                        <p className='opacity-60 text-[16px] mb-[15px] '>086-374-4962 <br />
                            robb.kohler@coffeestyle.com</p>
                        <div className='text-[12px] opacity-60 font-bold tracking-[2px] uppercase'>Management</div>
                        <div className='text-[18px]'>Roob Dayana</div>
                        <p className='opacity-60 text-[16px] mb-[15px] '>354-341-2750 <br />
                            roob.dayana@coffeestyle.com</p>
                        <div className='text-[12px] opacity-60 font-bold tracking-[2px] uppercase'>Support</div>
                        <div className='text-[18px]'>Warren Marsh</div>
                        <p className='opacity-60 text-[16px] mb-[15px] '>086-374-4962 <br />
                            robb.kohler@coffeestyle.com</p>
                    </div>
                </div>
                <Subscribe/>
                <Footer/>
            </div>
        </>
    )
}
export default Contact