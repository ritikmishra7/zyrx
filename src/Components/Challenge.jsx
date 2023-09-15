import React from 'react'

function Challenge() {
    return (
        <div id='challenge' className='flex flex-col md:flex-row lg:flex-row justify-between px-10 mb-48 mx-auto gap-10'>
            <div className='mt-4 ml-4 flex justify-start items-start w-full md:w-2/6 lg:w-2/5 h-full'>
                <h3 className='text-3xl font-bold'>UX Showdown</h3>
            </div>
            <div className='flex flex-col gap-4 mt-4 ml-4 text-2xl pr-6'>
                <p>Become a part of ZYRX's evolution by taking part in the ZYRX UX Challenge on zkEVM and Polygon PoS every Saturday.</p>
                <p>Don't miss out on sharing your insights! Feedback will be gathered in the <span className='text-[#664ADF] underline cursor-pointer'>ZYRX Discord channel.</span></p>
                <p>Begin your testing and trading journey on the <span className='text-[#664ADF] underline cursor-pointer'>ZYRX Testnet UI now!</span></p>
            </div>
        </div>
    )
}

export default Challenge