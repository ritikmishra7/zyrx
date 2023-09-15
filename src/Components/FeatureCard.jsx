import React from 'react'

function FeatureCard({ title, desc1, desc2 }) {


    return (
        <div className='flex flex-col items-center shadow-indigo-500/40 mb-8 rounded-2xl feature-card'>
            <div className='w-full flex justify-start items-center rounded-t-2xl feature-card-heading'>
                <div className='h-full w-full flex justify-start items-center mx-3'>
                    <h3 className='text-[#664ADF] text-3xl font-bold'>{title}</h3>
                </div>
            </div>
            <div className='flex flex-col items-center h-96 bg-white rounded-b-2xl pt-8 feature-card-content'>
                <p className='text-xl px-8 py-2'>{desc1}</p>
                {desc2 && <p className='text-xl px-8 py-2'>{desc2}</p>}
            </div>
        </div>
    )
}

export default FeatureCard