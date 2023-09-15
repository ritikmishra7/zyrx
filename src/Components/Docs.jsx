import React from 'react'
import ChallengeCard from './ChallengeCard'

const data = [
    {
        title: 'Trader\'s Hub',
        desc: 'Engage with institutional-grade perpetual futures and experience unparalleled trading conditions in the DeFi landscape.'
    },
    {
        title: 'Broker Central',
        desc: 'Direct your clients to ZYRX and benefit from lucrative brokerage fees.'
    },
    {
        title: 'Liquidity Pros',
        desc: 'Align with ZYRX\'s profit and loss while earning competitive fees by fortifying our liquidity pool.'
    },
    {
        title: 'Liquidation Leaders',
        desc: 'Ensure market stability by liquidating positions that fall below margin prerequisites.'
    },
    {
        title: 'Referral Royalty',
        desc: 'Capitalize on referral fees for each successful transaction.'
    },
    {
        title: 'Guardians of Governance',
        desc: 'Bolster the security of ZYRX by participating in governance decisions.'
    },
]



function Docs() {
    return (
        <div id='docs' className='flex flex-col md:flex-row lg:flex-row justify-between px-10 mb-48 mx-auto gap-10'>
            <div className='mt-4 ml-4 flex justify-start items-start w-full md:w-2/6 lg:w-2/5 h-full'>
                <h3 className='text-3xl font-bold'>Docs</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-4 ml-4 text-2xl pr-6'>
                {data.map((item, index) => (
                    <ChallengeCard key={`${item.title}-${index}`} title={item.title} desc={item.desc} />
                ))}
            </div>
        </div>
    )
}

export default Docs