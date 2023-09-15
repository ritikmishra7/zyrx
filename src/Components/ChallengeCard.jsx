import React from 'react'

function ChallengeCard({ title, desc }) {
    return (
        <div className='flex flex-col rounded-xl justify-between items-start ml-5 mb-5 challenge-card'>
            <div className='mb-2 px-4 py-4 flex flex-col justify-start items-start gap-10'>
                <h4 style={{ fontSize: '32px' }}>{title}</h4>
                <p style={{ fontSize: '22px' }}>{desc}</p>
            </div>
            <button className='bg-[#664ADF] hover:bg-[#664adfb3] text-white py-2 px-4 font-normal rounded-3xl text-base ml-auto mr-4 mb-4'>
                Learn More
            </button>
        </div>
    )
}

export default ChallengeCard