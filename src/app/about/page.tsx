"use client"
import React, { useEffect } from 'react'
import Introductions from '../common/intro'
import Historycard from '../common/history'
import Subscribe from '../common/subcribeplan'
import Footer from '../footer/page'

const About = () => {
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
                <div className='max-w-[1440px] bg-[#f6f6f6] mx-auto  '>
                    <div className='max-w-[940px] mx-auto pt-[100px] pb-[110px] '>
                        <div className='max-w-[60%] mb-[100px] mx-auto font-karla tracking-[.3px]  text-center'>
                            <h1 className='text-[36px] mt-[10px] mb-[15px] '>About</h1>
                            <p className=' mb-[15px] text-[18px] opacity-65'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[940px] mx-auto top-[-100] relative '>
                    <div className='bg-[url("https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a780eecdfcc_About-Cover.jpg")] bg-cover mb-[100px] h-[320px] w-full '>
                    </div>
                    <div className='w-[70%] mx-auto mb-[100px]'>
                        <div className='text-[12px] font-bold opacity-60 uppercase tracking-[2px]  text-center '>Introductions</div>
                        <div className='text-center'>
                            <h2 className='text-[28px] my-[17px] '>Overlaid the jeepers uselessly much excluding everyday life.</h2>
                            <p className='text-[16px] opacity-65 leading-7 '>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                    </div>
                    <div className='lg:grid grid-cols-2 items-center mb-[130px] gap-[20px]'>
                        <div className='justify-center  pl-[60px] '>
                            <h3 className='text-[24px] mt-[10px] mb-[35px]'>Overlaid the jeepers uselessly much excluding everyday life.</h3>
                            <p className='text-[16px] opacity-65 leading-7 mb-[15px]'>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                        <div className='bg-[url("https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7af7e3ecdfad_About%20Image%201.jpg")] w-full bg-cover h-full  min-h-[360px] '>
                        </div>
                    </div>
                    <div className='lg:grid  grid-cols-2 items-center mb-[130px] gap-[20px]'>
                        <div className='justify-center  pr-[60px] '>
                            <h3 className='text-[24px] mt-[10px] mb-[35px]'>Overlaid the jeepers uselessly much excluding everyday life.</h3>
                            <p className='text-[16px] opacity-65 leading-7 mb-[15px]'>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                        <div className='bg-[url("https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a6c4decdfa3_About%20Image%202.jpg")] w-full bg-cover h-full  min-h-[360px] '>
                        </div>
                    </div>

                    <div className='flex flex-wrap justify-center   px-1 '>
                        <Introductions
                            imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7ac384ece028_Fred.jpg'
                            width='300px'
                            height='380px'
                            Name='Fred Gleason'
                            position='Brand Owner' />
                        <Introductions
                            imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a8449ece020_Isabel.jpg'
                            width='300px'
                            height='380px'
                            Name='Fred Gleason'
                            position='Brand Owner' />
                        <Introductions
                            imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a6004ece019_Maurice.jpg'
                            width='300px'
                            height='380px'
                            Name='Fred Gleason'
                            position='Brand Owner' />
                    </div>
                </div>
                <div className='bg-[url("https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a6103ecdfcd_brooke-lark-230509-unsplash.jpg")] bg-fixed mb-[100px] bg-center mt-[100px] bg-cover bg-le bg-no-repeat h-[380px] '>
                </div>
                <div className='max-w-[940px] mx-auto'>
                    <div className='text-[12px] opacity-65 uppercase tracking-[2px] mb-[100px] font-bold text-center '>
                        History Timeline
                    </div>
                    <Historycard
                        date="October 2018"
                        p1="One day however a small line"
                        p2="It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum"
                    />
                    <Historycard
                        date='August 2018'
                        p1='Overlaid the jeepers uselessly'
                        p2='It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.' />
                    <Historycard
                        date='November 2017'
                        p1="We've started CoffeeStyle."
                        p2='' />
                </div>
                <Subscribe />
                <Footer/>
            </div>
        </>
    )
}

export default About