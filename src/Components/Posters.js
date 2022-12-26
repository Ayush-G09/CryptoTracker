import React from 'react'

function Posters(props) {
  return (
    <div id={props.Id} className='min-w-full lg:min-w-[33.5%] h-3/4 flex justify-center font-Inter snap-center'>
        <div className='w-[94%] h-full bg-[#ffffff] rounded-lg lg:rounded-xl shadow-lg flex pr-1'>
            <div className='h-full w-35% flex items-center justify-center pl-1'>
                <img alt={props.alt} src={props.img} className='w-20 h-20'/>
            </div>
            <div className='h-full w-65% flex flex-col pt-3 lg:pt-5 pl-1 lg:pl-2'>
                <label className='text-gray-500 text-sm'>{props.head}</label>
                <label className='font-bold text-sm'>{props.content}</label>
            </div>
        </div>
    </div>
  )
}

export default Posters