import React from 'react'
interface historytype {
  date: string
  p1: string
  p2: string
}
const Historycard = ({ date, p1, p2 }: historytype) => {
  return (
    <>
      <div className='max-w-[940px]  mx-auto text-center mb-[100px] '>
        <div className='w-[60%] mx-auto'>
          <div className='text-[12px] opacity-60 tracking-[2px] uppercase font-bold mb-[10px] '>
            {date}
          </div>
          <div>
            <p className='text-[18px] my-[10px] '>{p1}</p>
            <p className='text-[16px] opacity-60'>{p2}</p>
          </div>
          <div className='w-full mx-auto text-center place-items-center'>
            <div className='w-[200px] h-[1px] mt-[30px]  bg-[#ececed]'>
              <div className=' w-[1px] h-[60px] bg-[#ececed] justify-self-center'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Historycard