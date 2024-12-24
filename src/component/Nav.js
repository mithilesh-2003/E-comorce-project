import React from 'react'

function Nav() {
  return (
    <div>
        <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
        <a className='py-2 px-5 border rounded border-blue-200 text-blue-300' href='/create'>add new product</a>
        <hr className='w-[80%]'/>
        <h1 className='text-2xl mb-3'>Category filter</h1>
        <ul className=' w-[80%]'>
          <li className=' mb-3 flex items-center'>
            <span className='  rounded-full w-[15px] h-[15px] bg-blue-200 m-2'></span>{""}
            Cat1
          </li>
          <li className=' mb-3 flex items-center'>
            <span className='  rounded-full w-[15px] h-[15px] bg-green-200 m-2'></span>{""}
            Cat1
          </li>
          <li className=' mb-3 flex items-center'>
            <span className='  rounded-full w-[15px] h-[15px] bg-red-200 m-2'></span>{""}
            Cat1
          </li>

         
        </ul>
        
      </nav>
    </div>
  )
}

export default Nav