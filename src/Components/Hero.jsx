import React from 'react'
import HeroImg from '../Assets/images/hero.svg'

function Hero() {
    return (
        <div className='mb-48 mx-20 w-auto flex flex-col md:flex-row lg:flex-row items-center mt-8 gap-1 h-fit justify-around'>
            <div className='flex justify-center items-center flex-col w-2/5 md:h-2/5 lg:h-2/6'>
                <h1 className='text-5xl md:text-6xl lg:text-8xl font-bold w-auto h-auto'>
                    Elite Decentralized Derivatives for the Pros
                </h1>
            </div>
            <div className='w-10/12 lg:w-2/5 md:w-2/4'>
                <img src={HeroImg} alt="hero" className='w-full' />
            </div>
        </div>
    )
}

export default Hero