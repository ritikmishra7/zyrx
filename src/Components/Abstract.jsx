import React from 'react'

function Abstract() {
    return (
        <div id='abstract' className='flex flex-col md:flex-row lg:flex-row justify-between px-10 mb-48 mx-auto gap-10'>
            <div className='mt-4 ml-4 flex justify-start items-start w-full md:w-2/6 lg:w-2/5 h-full'>
                <h3 className='text-3xl font-bold'>Abstract</h3>
            </div>
            <div className='flex flex-col gap-4 mt-4 ml-4 text-2xl pr-6'>
                <p>ZYRX revolutionizes the on-chain trading landscape as an <span className='text-[#664ADF]'>institutional-grade</span> perpetual futures DEX, wielding a financial engineering model that significantly alters the trading dynamics of perpetual futures. Envision a decentralized version of BitMEX, available for <span className='text-[#664ADF]'>white-labeling right from the start.</span></p>
                <p>The platform's unique pricing mechanism continuously adjusts to market fluctuations, ensuring <span className='text-[#664ADF]'>optimal protection for both liquidity providers and successful traders</span>. This leads to unparalleled trading conditions within the DeFi sphere.</p>
                <p><span className='text-[#664ADF]'>Bolstered by Polygon zkEVM.</span></p>
            </div>
        </div>
    )
}

export default Abstract