import React from 'react'
import { faStar } from '@fortawesome/fontawesome-free-regular'
import { faCaretDown, faEllipsisVertical, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CoinsInfo(props) {
  return (
    <>
    <div onClick={() => {props.cl(); props.cc(props.k)}} className='py-2 w-full flex lg:hidden items-center border-b font-Inter'>
        <div className='h-full w-1/2 flex items-center text-sm overflow-hidden overflow-x-scroll scrollbar-hide whitespace-nowrap'>
            <FontAwesomeIcon icon={faStar} className='text-gray-500 text-xs'/>
            <img alt={props.n} src={props.is} className='w-7 h-7 rounded-full ml-1'/>
            <label className='font-bold ml-1'>{props.n}</label>
            <label className='font-semibold text-gray-500 ml-1'>{props.s.toUpperCase()}</label>
        </div>
        <div className='h-full w-30% flex items-center text-xs font-bold pl-1'>
            <label>${props.price.toLocaleString()}</label>
        </div>
        <div className='h-full w-1/5 flex items-center text-xs font-bold pl-1'>
            {props.tfh < 0 ?
            <>
            <FontAwesomeIcon icon={faCaretDown} className='mr-1 text-red-500'/>
            <label className='text-red-500'>{props.tfh.toFixed(2)}</label>
            </>
            :
            <>
            <FontAwesomeIcon icon={faCaretUp} className='mr-1 text-green-500'/>
            <label className='text-green-500'>{props.tfh.toFixed(2)}</label>
            </>
            }
        </div>
    </div>
    <div className='py-2 w-full hidden lg:flex items-center border-b text-sm font-bold font-Inter'>
        <label className='w-[2%] h-full flex items-center justify-center'>
            <FontAwesomeIcon icon={faStar} className='text-gray-500 text-xs'/>
        </label>
        <label className='w-[2%] h-full flex items-center justify-center'>{props.rank}</label>
        <label className='w-[15%] h-full flex items-center overflow-hidden overflow-x-scroll scrollbar-hide whitespace-nowrap'>
            <img alt={props.n} src={props.is} className='w-9 h-9 rounded-full'/>
            <label className='font-bold ml-1'>{props.n}</label>
            <label className='font-semibold text-gray-500 ml-1'>{props.s.toUpperCase()}</label>
        </label>
        <label className='w-[10%] h-full flex items-center font-semibold overflow-hidden overflow-x-scroll scrollbar-hide whitespace-nowrap'>${props.price.toLocaleString()}</label>
        {props.tfh < 0 ? 
        <>
        <div className='w-[7%] h-full flex items-center justify-center font-semibold text-red-500'>
            <FontAwesomeIcon icon={faCaretDown} className='mr-1 text-base'/>
            <label>{props.tfh.toFixed(2)}</label>
        </div>
        </>
        :
        <>
        <div className='w-[7%] h-full flex items-center justify-center font-semibold text-green-500'>
            <FontAwesomeIcon icon={faCaretUp} className='mr-1 text-base'/>
            <label>{props.tfh.toFixed(2)}</label>
        </div>
        </>
        }
        {props.sd < 0 ?
        <>
        <div className='w-[7%] h-full flex items-center justify-center font-semibold text-red-500'>
            <FontAwesomeIcon icon={faCaretDown} className='mr-1 text-base'/>
            <label>{props.sd.toFixed(2)}</label>
        </div>
        </>
        :
        <>
        <div className='w-[7%] h-full flex items-center justify-center font-semibold text-green-500'>
            <FontAwesomeIcon icon={faCaretUp} className='mr-1 text-base'/>
            <label>{props.sd.toFixed(2)}</label>
        </div>
        </>
        }
        <label className='w-[22%] h-full flex items-center justify-end pr-1 font-semibold overflow-hidden overflow-x-scroll scrollbar-hide whitespace-nowrap'>${props.marcap.toLocaleString()}</label>
        <div className='w-[22%] h-full flex flex-col items-end justify-center pr-1 font-semibold overflow-hidden overflow-x-scroll scrollbar-hide whitespace-nowrap'>
            <label>${props.vol.toLocaleString()}</label>
            <label className='text-gray-500'>{props.vol / props.price + ' ' + props.s.toUpperCase()}</label>
        </div>
        <div className='w-[16%] h-full flex flex-col items-end justify-center pr-1 font-semibold overflow-hidden overflow-x-scroll scrollbar-hide whitespace-nowrap'>
            <label>{props.cs + ' ' + props.s.toUpperCase()}</label>
            <div className='w-70% h-1 rounded-2xl overflow-hidden bg-gray-200'>
                <div className='h-full bg-gray-400 w-[83%]'></div>
            </div>
        </div>
        <label className='w-[2%] h-full flex items-center justify-center'>
            <FontAwesomeIcon icon={faEllipsisVertical} className='font-light text-lg'/>
        </label>
    </div>
    </>
  )
}

export default CoinsInfo