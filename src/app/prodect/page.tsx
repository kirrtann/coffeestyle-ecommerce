import React from 'react'
import CommonCard from '../common/card'
import Subscribe from '../common/subcribeplan'
import Link from 'next/link'
import Footer from '../footer/page'

const Prodect = () => {
    return (
        <>
            <div className='max-w-[940px] mx-auto mt-[100px]'>
                <div className='text-center mb-[50px] ' >
                    <h3 className='text-[36px] mt-[10px] mb-[15px] '>Our Products</h3>
                    <p className='text-[18px] opacity-55 tracking-[1px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className='uppercase text-center  mb-[100px] mx-auto justify-center md:flex grid gap-y-2  max-w-[940px] '>
                    <Link href="" className='border border-[#ececed] py-[10px] px-[16px] w-full  text-[12px] tracking-[2px] mr-[5px] font-bold text-[#a25f4b] ' >all products</Link>
                    <Link href="" className='border border-[#ececed] py-[10px] px-[16px] w-full text-[12px] tracking-[2px] mr-[5px] font-bold text-[#a25f4b] ' >coffee mug</Link>
                    <Link href="" className='border border-[#ececed] py-[10px] px-[16px] w-full text-[12px] tracking-[2px] mr-[5px] font-bold text-[#a25f4b] ' >others</Link>
                    <Link href="" className='border border-[#ececed] py-[10px] px-[16px] w-full text-[12px] tracking-[2px] mr-[5px] font-bold text-[#a25f4b] ' >premium</Link>
                    <Link href="" className='border border-[#ececed] py-[10px] px-[16px] w-full text-[12px] tracking-[2px] mr-[5px] font-bold text-[#a25f4b] ' >teLink mugs</Link>
                </div>

                <div className='flex flex-wrap justify-center gap-4 max-w-[940px] '>
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
            <div>
                <Subscribe />
                <Footer/>
            </div>
        </>
    )
}

export default Prodect