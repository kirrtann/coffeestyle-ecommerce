"use client"
import React, { useEffect } from 'react'
import CafeDetail from '../common/cafe'
import VarticalCrad from '../common/varticalcard'
import SmallCard from '../common/smallcard'
import Subscribe from '../common/subcribeplan'
import Image from 'next/image'
import Footer from '../footer/page'

const Blog = () => {
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
            <div className='px-2'>
                <div className='max-w-[1440px] bg-[#f6f6f6]  mx-auto font-karla '>
                    <div className='max-w-[940px] mx-auto text-center pt-[100px] pb-[100px] '>
                        <div className='w-[60%] mx-auto justify-center  '>
                            <h1 className='text-[36px] my-[12px] '>Read coffee stories on our Blog</h1>
                            <p className='text-[18px] opacity-65 mb-[15px] tracking-[1px]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                            <p className='text-[12px] font-bold opacity-65  uppercase my-[100px] tracking-[2px]'>Featured Posts</p>
                        </div>

                    </div>
                </div>
                <div>
                    <div className='max-w-[940px] mx-auto top-[-100] gap-5 flex flex-wrap justify-center  relative '>
                        <CafeDetail
                            classname='max-w-[460px] fade-element'
                            imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a5e47ece03c_Blog%20Pic%20Head%208.jpg'
                            width='460px'
                            height='300px'
                            Name='Recent research suggests that heavy coffee drinkers may reap health benefits.'
                            deteail="It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                            date="October 9, 2018"
                        />
                        <CafeDetail
                            classname='max-w-[460px] fade-element'
                            imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a4ce6ece036_bar-cafe-caffeine-1002740.jpg'
                            width='460px'
                            height='300px'
                            Name='Health Check: why do I get a headache when I haven’t had my coffee?'
                            deteail="It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem."
                            date="October 9, 2018"
                        />
                    </div>
                    <div className='max-w-[940px] mx-auto lg:flex '>
                        <div className='max-w-[600px]  mr-[40px] ' >
                            <h2 className='text-[22px]  border-b pb-10 mb-[50px] '>Letest Posts</h2>

                            <div>
                                <VarticalCrad
                                    classname='md:flex mb-[50px]'
                                    imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a5e47ece03c_Blog%20Pic%20Head%208.jpg'
                                    width='260px'
                                    height='210px'
                                    Name='Health Check: why do I get a headache when I haven’t had my coffee?'
                                    deteail="It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem."
                                    date="October 9, 2018"
                                />
                                <VarticalCrad
                                    classname='md:flex mb-[50px]'
                                    imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a3042ece037_Blog%20Pic%20Head%207.jpg'
                                    width='260px'
                                    height='210px'
                                    Name='Health Check: why do I get a headache when I haven’t had my coffee?'
                                    deteail="It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem."
                                    date="October 9, 2018"
                                />
                                <VarticalCrad
                                    classname='md:flex mb-[50px]'
                                    imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a4ce6ece036_bar-cafe-caffeine-1002740.jpg'
                                    width='260px'
                                    height='210px'
                                    Name='Health Check: why do I get a headache when I haven’t had my coffee?'
                                    deteail="It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem."
                                    date="October 9, 2018"
                                />
                                <VarticalCrad
                                    classname='md:flex mb-[50px]'
                                    imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a8fd5ece039_Blog%20Head%20Pic%2010.jpg'
                                    width='260px'
                                    height='210px'
                                    Name='Health Check: why do I get a headache when I haven’t had my coffee?'
                                    deteail="It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem."
                                    date="October 9, 2018"
                                />
                                <VarticalCrad
                                    classname='md:flex mb-[50px]'
                                    imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a4ce6ece036_bar-cafe-caffeine-1002740.jpg'
                                    width='260px'
                                    height='210px'
                                    Name='Health Check: why do I get a headache when I haven’t had my coffee?'
                                    deteail="It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem."
                                    date="October 9, 2018"
                                />
                            </div>
                        </div>
                        <div className='max-w-[300px]'>
                            <h2 className='text-[22px]  border-b pb-10'>About US</h2>
                            <div className='mt-[25px] leading-7 mb-[30px]'>
                                <Image src="/loga.png" alt="logo" className='w-[112px]  mb-[15px] ' width={112} height={50} />
                                <p className='text-[16px] opacity-55 mb-[15px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                                <a className='border-b pb-2 text-[16px] border-[#a25f4b] opacity-80 hover:opacity-100 text-[#a25f4b]'>Read the full Story </a>
                            </div>
                            <div className='mt-[45px]'>
                                <h2 className='text-[22px]  border-b pb-5'>Categories</h2>
                                <div className='mt-[30px]'>
                                    <SmallCard
                                        imageurl=''
                                        width=''
                                        height=''
                                        Name='Briesta' />
                                    <SmallCard
                                        imageurl=''
                                        width=''
                                        height=''
                                        Name='coffee' />
                                    <SmallCard
                                        imageurl=''
                                        width=''
                                        height=''
                                        Name='Lifestyle' />
                                    <SmallCard
                                        imageurl=''
                                        width=''
                                        height=''
                                        Name='Mugs' />
                                </div>
                            </div>
                            <div className='mt-[45px]'>
                                <h2 className='text-[22px]  border-b pb-5'>Authors</h2>

                                <div className='mt-[30px]'>
                                    <SmallCard
                                        imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7ac384ece028_Fred.jpg'
                                        width='60px'
                                        height='60px'
                                        Name='Fred Gleason' />
                                    <SmallCard
                                        imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a8449ece020_Isabel.jpg'
                                        width='60px'
                                        height='60px'
                                        Name='Isabel hemaill' />
                                    <SmallCard
                                        imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a6004ece019_Maurice.jpg'
                                        width='60px'
                                        height='60px'
                                        Name='Maurice Herman' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-b border-l fade-element text-[20px] max-w-[940px] mx-auto p-[30px] text-[#a25f4b] border-[#a25f4b] mb-[30px]' >

                        I wake up some mornings and sit and have my coffee and look out at my beautiful garden, and I go, ’Remember how good this is. Because you can lose it.
                    </div>
                    <div className='mb-[130px]'>
                        <p className='text-[12px] font-bold tracking-[2px] text-center opacity-30'>Jason Johnson - Owner of CoffeeStyle</p>
                    </div>
                    <div>
                        <Subscribe />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog