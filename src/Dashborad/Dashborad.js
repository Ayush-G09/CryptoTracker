import React, { useEffect, useState } from 'react'
import { faBars, faC, faArrowDown, faAngleLeft, faAngleRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/fontawesome-free-regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Posters from '../Components/Posters'
import { Data } from '../Data/PosterData';
import CoinsInfo from '../Components/CoinsInfo';
import PopUp from '../Components/PopUp';
import axios from 'axios'

function Dashborad() {

    const [currentPage, setCurrentPage] = useState(1);
    const [isPopUpActive, setIsPopUpActive] = useState(false);
    const [coinsData, setCoinsData] = useState([]);
    const [perPage, setPerPage] = useState(10);
    const [firstLoad, setFirstLoad] = useState(true);
    const [popUpData, setPopUpData] = useState([]);

    function DetectScroll() {

        if(document.getElementById('posterContainer').scrollLeft < window.innerWidth) {
            ChangeNavIndicators(0);
        }
        
        if(document.getElementById('posterContainer').scrollLeft >= window.innerWidth) {
            ChangeNavIndicators(1);
        }
        
        if(document.getElementById('posterContainer').scrollLeft >= window.innerWidth*2) {
            ChangeNavIndicators(2);
        }
        
        if(document.getElementById('posterContainer').scrollLeft >= window.innerWidth*3) {
            ChangeNavIndicators(3);
        }
    }

    function OnNavDotClick(i) {
        document.getElementById(`poster${i}`).scrollIntoView();
    } 

    function ChangeNavIndicators(index) {

        var ele = document.getElementsByName('navdot');

        for(var i = 0; i < ele.length; i++) {
            ele[i].classList.remove('border-0');
            ele[i].classList.remove('bg-[#0052FE]');
            ele[i].classList.add('border-2');
        }
        ele[index].classList.remove('border-2');
        ele[index].classList.add('border-0');
        ele[index].classList.add('bg-[#0052FE]');
    }

    useEffect(() => {
        var ele = document.getElementsByName('navdot');
        ele[0].classList.add('bg-[#0052FE]');
        ele[0].classList.remove('border-2');
        ele[0].classList.add('border-0');

        if(firstLoad) {
            GetCoinsData(1);
            setFirstLoad(false);
        }
    },)

    async function GetCoinsData(i, pp) {
        var ppno = perPage;
        if(pp !== undefined) {
            ppno = pp;
        }
        await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=${ppno}&page=${i}&sparkline=false&price_change_percentage=24h%2C7d`, {crossDomain: true})
        .then((res) =>
            setCoinsData(res.data)
        );
        document.getElementById('tablebody').scrollTop = 0;
    }

    function OnRowSelect() {
        setPerPage(document.getElementById('row').value);
        GetCoinsData(currentPage, document.getElementById('row').value);
    }

    function ChangePage(i) {
        if(i >= 1 && i <= 10) {

            setCurrentPage(i);
            var angle = document.getElementsByName('angle');
            var nos = document.getElementsByName('nos');

            for(var j = 0; j < angle.length; j++) {
                angle[j].classList.remove('bg-gray-400');
                angle[j].classList.remove('text-gray-200');
                angle[j].classList.remove('border-0');
                angle[j].classList.add('text-gray-400');
                angle[j].classList.add('border-2');
            }

            for(var k = 0; k < nos.length; k++) {
                nos[k].classList.remove('border-[#0052FE]');
                nos[k].classList.remove('text-[#0052FE]');
                nos[k].classList.add('border-gray-300');
            }

            if(i === 1) {
                angle[0].classList.remove('text-gray-400');
                angle[0].classList.remove('border-2');
                angle[0].classList.add('bg-gray-400');
                angle[0].classList.add('text-gray-200');
                angle[0].classList.add('border-0');
                nos[0].classList.remove('border-gray-300');
                nos[0].classList.add('border-[#0052FE]');
                nos[0].classList.add('text-[#0052FE]');
            }
            if(i === 2) {
                nos[1].classList.remove('border-gray-300');
                nos[1].classList.add('border-[#0052FE]');
                nos[1].classList.add('text-[#0052FE]');
            }
            if(i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 8) {
                nos[2].classList.remove('border-gray-300');
                nos[2].classList.add('border-[#0052FE]');
                nos[2].classList.add('text-[#0052FE]');
            }
            if(i === 9) {
                nos[3].classList.remove('border-gray-300');
                nos[3].classList.add('border-[#0052FE]');
                nos[3].classList.add('text-[#0052FE]');
            }
            if(i === 10) {
                angle[1].classList.remove('text-gray-400');
                angle[1].classList.remove('border-2');
                angle[1].classList.add('bg-gray-400');
                angle[1].classList.add('text-gray-200');
                angle[1].classList.add('border-0');
                nos[4].classList.remove('border-gray-300');
                nos[4].classList.add('border-[#0052FE]');
                nos[4].classList.add('text-[#0052FE]');
            }
        }
        GetCoinsData(i);
    }

    function ActivePopUp() {
        setIsPopUpActive(!isPopUpActive);
    }

    function OnCoinClick(i) {
        var data = {
            url: coinsData[i].image,
            name: coinsData[i].name,
            price: coinsData[i].current_price,
            tfh: coinsData[i].price_change_percentage_24h,
            sd: coinsData[i].price_change_percentage_7d_in_currency,
            marketcap: coinsData[i].market_cap,
            volume: coinsData[i].market_cap_change_24h,
            volumeno: coinsData[i].market_cap_change_24h / coinsData[i].current_price,
            supply: coinsData[i].total_supply,
            symbol: coinsData[i].symbol
        }
        setPopUpData(data);
    }
    
  return (
    <div className='h-screen w-screen bg-[#ffffff] lg:bg-[#F7F9FC] flex flex-col items-center font-Inter relative'>


        {/* PopUp Start */}
        {isPopUpActive ? <PopUp cl={ActivePopUp} data={popUpData}/> : null}
        {/* PopUp End */}


        {/* Nav-Bar Start */}
        <div className='h-7% w-full bg-[#ffffff] shadow-md flex items-center'>
            <FontAwesomeIcon icon={faBars} className='text-2xl ml-4 lg:hidden'/>
            <FontAwesomeIcon icon={faC} className='text-xl ml-4 lg:ml-[8%]'/>
            <label className='font-bold w-full pl-2'>Crypto Tracker</label>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl ml-4 hidden lg:flex'/>
            <FontAwesomeIcon icon={faBars} className='text-2xl ml-5 mr-[8%] hidden lg:flex'/>
        </div>
        {/* Nav-Bar End */}


        {/* Posters-Container Start */}
        <div className='h-1/5 w-full flex items-center justify-center'>
            <div onClick={() => OnNavDotClick(0)} className='w-7 h-7 hidden lg:flex items-center justify-center bg-gray-400 text-gray-200 rounded-full cursor-pointer'>
                <FontAwesomeIcon icon={faAngleLeft}/>
            </div>
            <div id='posterContainer' onScroll={() => DetectScroll()} className='h-full w-full lg:w-[86%] flex items-center overflow-hidden overflow-x-scroll snap-x scrollbar-hide'>
                {Data.map((item, index) => {
                    return(
                        <Posters Id={`poster${index}`} key={index} alt={index} img={item.img} head={item.head} content={item.content}/>
                    )
                })}
            </div>
            <div onClick={() => OnNavDotClick(3)} className='w-7 h-7 hidden lg:flex items-center justify-center bg-gray-400 text-gray-200 rounded-full cursor-pointer'>
                <FontAwesomeIcon icon={faAngleRight}/>
            </div>
        </div>
        {/* Posters-Container End */}


        {/* Poster Navigation Start */}
        <div className='h-2% w-full flex items-center justify-center lg:hidden'>
            {Data.map((n, i) => {
                return(
                    <div onClick={() => OnNavDotClick(i)} key={i} name='navdot' className='border-[#94B5FC] border-2 w-2 h-2 rounded-full ml-2 cursor-pointer'></div>
                )
            })}
        </div>
        {/* Poster Navigation End */}

        {/* Heading Start */}
        <div className='h-10% lg:h-[12%] w-full flex flex-col items-center justify-center pl-[3%]'>
            <label className='w-90% font-bold text-xl'>Top 100 Cryptocurrencies by Market Cap</label>
            <div className='hidden lg:flex w-90% mt-2 font-semibold items-center'>
                <label className='p-2 rounded-xl bg-[#EFF2F5]'><FontAwesomeIcon icon={faStar} className='text-gray-400'/> Favourites</label>
                <label className='p-2 rounded-xl bg-[#EFF2F5] text-[#0052FE] ml-5'>CryptoCurrencies</label>
                <label className='p-2 rounded-xl bg-[#EFF2F5] text-gray-500 ml-5'>DeFi</label>
                <label className='p-2 rounded-xl bg-[#EFF2F5] text-gray-500 ml-5'>NFTs & Collectibles</label>
                <label className='text-gray-500 font-normal ml-auto'>show rows</label>
                <select name='row' id='row' onChange={() => OnRowSelect()} className='py-2 px-1 border-r-4 border-[#EFF2F5] bg-[#EFF2F5] rounded-xl outline-none ml-2 mr-8'>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                    <option value='25'>25</option>
                    <option value='30'>30</option>
                </select>
            </div>
        </div>
        {/* Heading End */}

        {/* Table Start */}
        <div className='w-full h-1/2 bg-[#ffffff] flex flex-col items-center'>
            {/* Table Header Start */}
            <div className='w-95% h-10% flex lg:hidden text-xs font-bold border-b'>
                <label className='w-1/2 h-full flex items-center pl-3'>NAME</label>
                <label className='w-30% h-full flex items-center pl-2'>PRICE</label>
                <label className='w-1/5 h-full flex items-center pl-2'>24H <FontAwesomeIcon icon={faArrowDown} className='ml-1 text-[#0052FE]'/></label>
            </div>
            <div className='w-[86%] h-10% hidden lg:flex text-sm font-bold border-b'>
                <label className='w-[2%] h-full flex items-center justify-center'></label>
                <label className='w-[2%] h-full flex items-center justify-center'>#</label>
                <label className='w-[15%] h-full flex items-center'>NAME</label>
                <label className='w-[10%] h-full flex items-center'>PRICE</label>
                <label className='w-[7%] h-full flex items-center justify-center'>24H <FontAwesomeIcon icon={faArrowDown} className='ml-1 text-[#0052FE]'/></label>
                <label className='w-[7%] h-full flex items-center justify-center'>7D</label>
                <label className='w-[22%] h-full flex items-center justify-end pr-1'>MARKET CAP</label>
                <label className='w-[22%] h-full flex items-center justify-end pr-1'>VOLUME(24H)</label>
                <label className='w-[16%] h-full flex items-center justify-end pr-1'>CIRCULATING SUPPLY</label>
                <label className='w-[2%] h-full flex items-center justify-center'></label>
            </div>
            {/* Table Header End */}

            {/* Table Body Start */}
            <div id='tablebody' className='w-95% lg:w-[86%] h-90% flex flex-col overflow-hidden overflow-y-scroll scrollbar-hide'>
                {coinsData.map((item, index) => {
                    return(
                        <CoinsInfo key={index} rank={item.market_cap_rank} sd={item.price_change_percentage_7d_in_currency} cs={item.total_supply} marcap={item.market_cap} vol={item.market_cap_change_24h} n={item.name} s={item.symbol} is={item.image} price={item.current_price} tfh={item.price_change_percentage_24h} k={index} cl={ActivePopUp} cc={OnCoinClick}/>
                    )
                })}
            </div>
            {/* Table Body End */}
        </div>
        {/* Table End */}

        {/* Page Selector Start */}
        <div className='w-full h-11% bg-[#ffffff] flex items-center justify-center lg:justify-end lg:pr-[8%]'>
            <div className='w-70% md:w-30% lg:w-[17%] h-70% flex items-center justify-between font-bold'>
                <label onClick={() => ChangePage(currentPage - 1)} name='angle' className='w-7 h-7 bg-gray-400 border-0 rounded flex items-center justify-center text-gray-200 cursor-pointer'>
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </label>
                <label name='nos' onClick={() => ChangePage(1)} className='w-7 h-7 border-[#0052FE] border-2 rounded flex items-center justify-center text-[#0052FE] cursor-pointer'>1</label>
                <label name='nos' onClick={() => ChangePage(2)} className='w-7 h-7 border-gray-300 border-2 rounded flex items-center justify-center text-black cursor-pointer'>2</label>
                <label name='nos' className='w-7 h-7 border-gray-300 border-2 rounded flex items-center justify-center text-black cursor-pointer'>{currentPage > 2 && currentPage < 9 ? currentPage : '...'}</label>
                <label name='nos' onClick={() => ChangePage(9)} className='w-7 h-7 border-gray-300 border-2 rounded flex items-center justify-center text-black cursor-pointer'>9</label>
                <label name='nos' onClick={() => ChangePage(10)} className='w-7 h-7 border-gray-300 border-2 rounded flex items-center justify-center text-black cursor-pointer'>10</label>
                <label onClick={() => ChangePage(currentPage + 1)} name='angle' className='w-7 h-7 border-gray-300 border-2 rounded flex items-center justify-center text-gray-400 cursor-pointer'>
                    <FontAwesomeIcon icon={faAngleRight}/>
                </label>
            </div>
        </div>
        {/* Page Selector End */}

    </div>
  )

}

export default Dashborad