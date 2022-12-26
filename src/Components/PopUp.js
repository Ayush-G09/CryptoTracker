import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faXmark, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

function PopUp(props) {
  return (
    <div className='absolute w-screen h-screen bg-[#00000070] flex items-center justify-center font-Inter'>
        <div className='w-90% h-1/2 bg-[#ffffff] rounded-lg overflow-hidden'>
            <div className='w-full h-17% flex items-center pl-3'>
                <img alt={props.data.name} src={props.data.url} className='w-9 h-9'/>
                <label className='w-70% text-lg font-bold ml-2'>{props.data.name}</label>
                <FontAwesomeIcon onClick={() => props.cl()} icon={faXmark} className='text-gray-400 text-2xl ml-2'/>
            </div>
            <div className='w-full h-17%'>
                <div className='w-full h-1/2 flex items-end text-xs font-semibold'>
                    <label className='w-2/5 pl-3 text-sm'>PRICE</label>
                    <label className='w-30% pl-3'>24H</label>
                    <div className='w-30% pl-3 flex'>7D</div>
                </div>
                <div className='w-full h-1/2 flex items-center text-sm font-semibold'>
                    <label className='w-2/5 pl-3'>${props.data.price.toLocaleString()}</label>
                    {props.data.tfh < 0 ?
                    <>
                    <div className='w-30% pl-3 flex items-center text-red-500'>
                        <FontAwesomeIcon className='text-lg' icon={faCaretDown}/>
                        <label className='ml-1'>{props.data.tfh.toFixed(2)}</label>
                    </div>
                    </>
                    :
                    <>
                    <div className='w-30% pl-3 flex items-center text-green-500'>
                        <FontAwesomeIcon className='text-lg' icon={faCaretUp}/>
                        <label className='ml-1'>{props.data.tfh.toFixed(2)}</label>
                    </div>
                    </>
                    }
                    {props.data.sd < 0 ? 
                    <>
                    <div className='w-30% pl-3 flex items-center text-red-500'>
                        <FontAwesomeIcon className='text-lg' icon={faCaretDown}/>
                        <label className='ml-1'>{props.data.sd.toFixed(2)}</label>
                    </div>
                    </>
                    :
                    <>
                    <div className='w-30% pl-3 flex items-center text-green-500'>
                        <FontAwesomeIcon className='text-lg' icon={faCaretUp}/>
                        <label className='ml-1'>{props.data.sd.toFixed(2)}</label>
                    </div>
                    </>
                    }
                </div>
            </div>
            <div className='w-full h-17%'>
                <div className='w-full h-1/2 flex items-end text-xs font-semibold'>
                    <label className='w-full pl-3'>MARKET CAP</label>
                </div>
                <div className='w-full h-1/2 flex items-center text-sm font-semibold'>
                    <label className='full pl-3'>${props.data.marketcap.toLocaleString()}</label>
                </div>
            </div>
            <div className='w-full h-17%'>
                <div className='w-full h-1/2 flex items-end text-xs font-semibold'>
                    <label className='w-full pl-3'>VOLUME (24H)</label>
                </div>
                <div className='w-full h-1/2 flex items-center text-sm font-semibold'>
                    <label className='full pl-3'>${props.data.volume.toLocaleString()} <label className='text-gray-400'>({props.data.volumeno.toFixed(0)} {props.data.symbol.toUpperCase()})</label></label>
                </div>
            </div>
            <div className='w-full h-17%'>
                <div className='w-full h-1/2 flex items-end text-xs font-semibold'>
                    <label className='w-full pl-3'>CIRCULATING SUPPLY</label>
                </div>
                <div className='w-full h-1/2 flex items-center text-sm font-semibold'>
                    <label className='full pl-3'>{props.data.supply.toLocaleString() + ' ' + props.data.symbol.toUpperCase()}</label>
                </div>
            </div>
            <div className='w-full h-10% flex pl-3'>
                <div className='w-70% h-2 rounded-lg overflow-hidden bg-gray-200'>
                    <div className={`h-full bg-gray-400 w-[83%]`}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopUp