
import React from 'react'
import CommonCard from '../common/card';
import CafeDetail from '../common/cafe';
import Subscribe from '../common/subcribeplan';

const Main = () => {
  return (
    <>
      <div>
        <div className="font-karla">
          <div className=' mb-[100px] '>
            <div className='max-w-[1440px] mx-auto'>
              <div className=' bg-[#050827] relative h-[530px] w-full '>
                <div className=' bg-[url("https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a58aaecdfba_Header-Pic.jpg")] mx-auto max-w-[940px] bg-cover bg-bottom h-[530px]  ' >
                  <div className='mx-auto text-center relative sm:top-[30%] w-[85%] top-[15%]  text-white'>
                    <p className='uppercase text-[12px] tracking-[2px] opacity-80 ' >Best place to buy  design </p>
                    <h1 className='sm:text-[48px] text-[34px] my-[10px] '>Coffee Mugs</h1>
                    <p className='text-[18px] mb-[30px] opacity-90'>The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</p>
                    <button className='text-[12px] tracking-[2px] uppercase   bg-white text-black px-[24px] py-[18px] font-bold  '>Explore our products</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='max-w-[940px] mx-auto '>
            <div className='mb-[100px] w-[70%] mx-auto text-center '>
              <h2 className='mb-[15px]mt-[20px] text-[28px] '>Even the all-powerful Pointing has no control about the blind texts.</h2>
              <p className='text-[16px] mb-[15px] text-[#1D1F2EB3] leading-7 '>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <a href="" className='text-[#a25f4b] border-b-2 mt-[10px] pb-1 text-[14px] border-[#a25f4b] ' >Read the full Story</a>
            </div>
            <div className='flex flex-wrap justify-center sm:gap-5 '>
              <CommonCard
                imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg'
                width='460px'
                height='540px'
                Name={"Pink Premium Ceramic"}
                price={99.00} />
              <CommonCard
                imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a25acecdfd6_jakub-dziubak-394720-unsplash.jpg'
                width='460px'
                height='540px'
                Name={"Golden Designers Mug"}
                price={50} />
            </div>
          </div>
          <div className='mx-auto max-w-[940px]   mt-[100px] ' >
            <p className='text-center opacity-80 font-bold text-[12px] uppercase tracking-[2px]'>More Products</p>
            <div></div>
            <div className='flex mt-[100px] justify-center ml-2 gap-2  lg:gap-4 mx-auto flex-wrap ' >
              <CommonCard
                imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a6173ece01a_trent-erwin-570303-unsplash.jpg'
                width='300px'
                height='380px'
                Name={"Pink Premium Ceramic"}
                price={99.00} />
              <CommonCard
                imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a0c09ece01c_steve-harvey-523112-unsplash.jpg'
                width='300px'
                height='380px'
                Name={"Pink Premium Ceramic"}
                price={99.00} />
              <CommonCard
                imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a223decdff8_ronaldo-arthur-vidal-66241-unsplash.jpg'
                width='300px'
                height='380px'
                Name={"Pink Premium Ceramic"}
                price={99.00} />
              <CommonCard
                imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a6d09ece015_rocknwool-690694-unsplash.jpg'
                width='300px'
                height='380px'
                Name={"Pink Premium Ceramic"}
                price={99.00} />
              <CommonCard
                imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7ae493ece012_rawpixel-645289-unsplash.jpg'
                width='300px'
                height='380px'
                Name={"Pink Premium Ceramic"}
                price={99.00} />
              <CommonCard
                imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a8461ece016_nathan-dumlao-643391-unsplash.jpg'
                width='300px'
                height='380px'
                Name={"Pink Premium Ceramic"}
                price={99.00} />
              <CommonCard
                imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a1db2ece009_natanja-grun-600152-unsplash.jpg'
                width='300px'
                height='380px'
                Name={"Pink Premium Ceramic"}
                price={99.00} />
              <CommonCard
                imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg'
                width='300px'
                height='380px'
                Name={"Pink Premium Ceramic"}
                price={99.00} />
              <CommonCard
                imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a81a6ecdfe7_levi-guzman-1077850-unsplash.jpg'
                width='300px'
                height='380px'
                Name={"Pink Premium Ceramic"}
                price={99.00} />

            </div>
          </div>
          <div className='mt-[100px]'>
            <p className='text-center opacity-80 font-bold text-[12px] uppercase tracking-[2px] mb-[100px] '>Buy 2 mugs and get a coffee magazine free</p>
            <div>
              <div className='max-w-[940px]   lg:flex px-3 mx-auto mb-[100px  ]' >
                <div className='mb-[20px] justify-center text-center  ' >
                  <p className='text-[12px] uppercase tracking-[2px] opacity-60 font-bold'>Premium Offer</p>
                  <h3 className='text-[36px] my-[13px] '>Get our Coffee Magazine</h3>
                  <p className='text-[16px] opacity-65'>The most versatile furniture system ever created. Designed to fit your life.  </p>
                  <button className='uppercase text-[12px] font-bold text-white bg-[#1D1F2E] px-[24px] py-[18px] mt-[15px] ' > start shopping </button>
                </div>
                <div className='flex gap-4 justify-center '>
                  <div className='bg-[url("https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a2f3decdfa9_Image.jpg")] w-[280px] h-[280px] bg-cover ' ></div>
                  <div className='space-y-5'>
                    <div className='bg-[url("https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7aa6d0ecdfa7_Image%202.jpg")] w-[160px] h-[130px] bg-cover '  ></div>
                    <div className='bg-[url("https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a528fecdfa6_Image.jpg")] w-[160px] h-[130px] bg-cover '  ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[url("https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7ac1c6ecdfd2_Section%20Image%202.jpg")] bg-fixed mb-[100px] mt-[100px] lg:bg-cover bg-contain bg-no-repeat h-[200px] sm:h-[380px] '>
          </div>
          <div className='text-center opacity-50 font-bold text-[12px] uppercase tracking-[2px] mb-[100px] '>
            Behind the mugs, lifestyle stories
          </div>
          <div className='flex gap-5 flex-wrap max-w-[940px]  mx-auto'>
            
              <CafeDetail
                classname='max-w-[300px]'
                imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a5e47ece03c_Blog%20Pic%20Head%208.jpg'
                width='300px'
                height='400px'
                Name='Recent research suggests that heavy coffee drinkers may reap health benefits.'
                deteail="It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                date="October 9, 2018"
              />
              <CafeDetail
                classname='max-w-[300px]'
                imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a4ce6ece036_bar-cafe-caffeine-1002740.jpg'
                width='300px'
                height='400px'
                Name='Health Check: why do I get a headache when I haven’t had my coffee?'
                deteail="It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem."
                date="October 9, 2018"
              />
              
    
              <CafeDetail
                classname='max-w-[300px]'
                imageurl='https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a5e47ece03c_Blog%20Pic%20Head%208.jpg'
                width='300px'
                height='400px'
                Name='How long does a cup of coffee keep you awake?'
                deteail="It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                date="October 9, 2018"
              />
              
          </div>
          <Subscribe />
        </div>
      </div>


    </>
  )
}

export default Main;