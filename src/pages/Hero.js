import { AiOutlineSearch } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';

import Blob from '../images/blobpink.svg';
import Board from '../images/boardmain.png';
import Logo from '../images/YFLOGO.svg';
import Text from '../images/YFTEXT.svg';


const Hero = () => {
    return (
        <div className=" bg-gray-800 h-screen min-w-[768px] overflow-hidden  relative text-yellow-600 font-quicksand -z-20">

            <div className='absolute pt-12 pl-12'>
                <img src={Logo} alt='Yellow Frog Logo' className='w-20 ml-10' />
                <img src={Text} alt='Yellow Frog' className='h-8' />
            </div>

            <div className="-rotate-90 flex absolute top-1/2 translate-y-12 space-x-16 text-sm tracking-widest font-extrabold">
                <div>
                    About
                </div>
                <div>
                    Contact
                </div>
            </div>

            <div className="flex absolute right-20 top-24 space-x-10 text-lg">
                <AiOutlineSearch />
                <BsCart2 />
            </div>

            <img src={Blob} alt='blob' className="absolute -top-[380px] -left-16 -rotate-90 h-[1600px] overflow-x-hidden -z-10" />
            <img src={Board} alt="Surf Board" className="mt-16 h-5/6 mx-auto" />


            <div className="absolute text-gray-300 w-[500px] text-right top-1/2 left-1/4 text-8xl font-bold -translate-x-56 -translate-y-1/2">
                Your Perfect Surfboard
            </div>

            <p className="absolute text-left text-white top-1/2 left-1/2 translate-x-28 translate-y-1/2 w-96">
                sub text that is atleast two to three lines depending upon the size that explains what this is all about.
            </p>

            <button className="absolute text-center text-white top-3/4 left-1/2 -translate-x-1/2 translate-y-24 z-10">
                Press me
            </button>

            <div className="relative">
                <div className="absolute -top-72 right-20 font-black text-xl uppercase">
                    Shop Now
                </div>
            </div>

        </div>
    )
}

export default Hero;