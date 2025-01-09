'use client'

import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>

      <nav className="max-w-[940px] mx-auto font-karla  ">
        <div className="container mx-auto flex items-center justify-between py-6 px-4 sm:px-6 md:px-8 font-karla">

          <div>
            <Image src="/loga.png" alt="logo" width={112} height={50} className='w-[112px]' />
          </div>

          <button
            className="lg:hidden text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <ul className="hidden lg:flex gap-5 tracking-[2px] py-[2px]  font-bold opacity-60 text-[12px]">
            <li>
              <Link href="/" className="hover:text-black font-semibold">
                HOME
              </Link>
            </li>
            <li>
              <Link href="prodect" className="hover:text-black">
                OUR PRODUCTS
              </Link>
            </li>
            <li>
              <Link href="blog" className="hover:text-black">
                BLOG
              </Link>
            </li>
            <li>
              <Link href="about" className="hover:text-black">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="contact" className="hover:text-black">
                CONTACT
              </Link>
            </li>
            <li>
              <Link href="styleguide" className="hover:text-black">
                STYLEGUIDE
              </Link>
            </li>
          </ul>

          <button className="text-gray-500 flex hover:text-gray-800">
            <div className='flex text-[12px] py-1 gap-3'>
              <div className=''>
                <Image src="https://cdn.prod.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a3450ecdfb5_Cart%20Icon.png" className='w-4  ' width={4} height={4} alt="" />
              </div>
              <div className=''>
                CARD

              </div><div className='bg-gray-500 text-white rounded-full h-fit px-2 py-1  text-[11px]'>
                0
              </div>

            </div>     </button>

        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-md absolute top-16 left-0 w-full z-40">
            <ul className="flex flex-col items-center space-y-4 py-6 text-sm font-medium text-gray-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-black font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="prodect"
                  className="hover:text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  OUR PRODUCTS
                </Link>
              </li>
              <li>
                <Link
                  href="blog"
                  className="hover:text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  href="about"
                  className="hover:text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="contact"
                  className="hover:text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  href="styleguide"
                  className="hover:text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  STYLEGUIDE
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>


    </>
  )
}

export default Navbar