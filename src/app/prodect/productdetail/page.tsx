import CommonCard from '@/app/common/card'
import Subscribe from '@/app/common/subcribeplan'
import Footer from '@/app/footer/page'
import Image from 'next/image'
import React from 'react'

const Prodectdetail = () => {
  return (
    <>
      <div className='max-w-[940px] mx-auto  ' >
        <div className='grid lg:grid-cols-2 my-[100px] items-center'>
          <div className='bg-[url("https://cdn.prod.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg")]  lg:max-w-[460px] bg-cover bg-center h-[460px] '>
          </div>
          <div className='pl-[60px] justify-center text-center lg:text-start '>
            <h1 className='text-[36px] mt-[10px] mb-[15px] '>Pink Premium Ceramic</h1>
            <p className='text-[18px] leading-8 tracking-[.5px] opacity-70'>A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.  </p>
            <div className='mt-[25px]'>
              <h3 className='text-[30px]'>$ 99.00 USD </h3>

              <p className='uppercase text-[10px] tracking-[2px] opacity-60 font-bold mb-[15px] '>Quantity</p>
              <div className='grid md:flex lg:justify-start justify-center gap-y-2 '>
              <input type="number" className='border md:w-[100px] px-[24px] py-[18px] text-center text-[12px] mr-[10px] font-bold ' defaultValue={1} />
              <button className='px-[24px]  bg-[#1d1f2e] text-white uppercase tracking-[2px] font-bold text-[12px] py-[18px]'>add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:flex mb-[100px]  mx-1  '>
          <div className='max-w-[460px] mr-[20px] place-self-center text-center'>
            <h5 className='uppercase text-[12px] tracking-[2px] opacity-60 font-bold mb-[15px] '>Details</h5>
            <p className='text-[16px] opacity-60 tracking-[.3px] leading-7'>Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.</p>
          </div>
          <div className='pl-[60px] lg:place-self-auto place-self-center'>
            <h5 className='uppercase text-[12px] tracking-[2px] opacity-60 font-bold mb-[15px]  '>Dimensions</h5>
            <ul className='list-disc pl-[10px] my-[10px] text-[16px] opacity-60 tracking-[.5px]' >
              <li>Lenght(in):45.0</li>
              <li>Height (in):98.0</li>
              <li>Width (in):56.0</li>
              <li>Weight (oz):200.0</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='lg:flex mb-[150px] bg-[#1d1f2e] text-white'>
        <div className='lg:w-[50%]'>

          <div className='bg-[url("https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a4a1aecdfab_Section%20Image.jpg")] bg-center bg-cover w-full h-full sm:min-h-[460px] min-h-[300px] '>
          </div>

        </div>
        <div className='lg:max-w-[470px] lg:w-full lg:pl-[70px] lg:py-[40px] w-[70%] lg:mx-0 mx-auto  lg:text-start text-center lg:mb-[10px]'>
          <div className='text-[24px] mb-[30px] '>
            <span>Handmade by </span>CoffeeStyle.
            <p className='text-[18px] opacity-80 '>The most versatile furniture system ever created. Designed to fit your life.</p>

          </div>
          <div className='lg:flex  mt-[10px]'>
            <div className='place-items-center my-[10px]'>
              <Image src={"https://cdn.prod.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a3cebecdf97_Jewel%20Icon%402x.png"} width={40} height={28} alt='' className=' ' />
            </div>
            <div className='text-[16px] ml-[20px] '>
              <p className=''>Premium Quality</p>
              <p className='opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.</p>
            </div>
          </div>
          <div className='lg:flex mt-[30px] '>
            <div className='place-items-center my-[10px]'>
              <Image src={"https://cdn.prod.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a4e2aecdf96_Lightbulb%20Icon%402x.png"} width={40} height={28} alt='' className=' ' />
            </div>
            <div className='text-[16px] ml-[20px] '>
              <p className=''>Gentle to the Environment</p>
              <p className='opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.</p>
            </div>
          </div>
        </div>

      </div>
      <div className='max-w-[940px] mx-auto '>
        <div className='uppercase text-[12px] text-center tracking-[2px] opacity-60 font-bold'>
          You might also like these
        </div>
        <div>
          <div className='flex mt-[100px]  justify-center ml-2 gap-2  lg:gap-4 mx-auto flex-wrap ' >
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
          </div>
        </div>


      </div>
      <Subscribe />
      <Footer />
    </>
  )
}
export default Prodectdetail  