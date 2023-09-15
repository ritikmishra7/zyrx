import React, { useEffect, useState } from 'react'
import FeatureCard from './FeatureCard'
import useWindowDimensions from '../CustomHooks/useWindowDimensions'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

const data = [
    {
        title: 'Brand It, Profit More',
        desc1: 'White-label partners, channel traders to ZYRX, leverage our broker fee, and unlock potential annual earnings in the millions',
        desc2: null
    },
    {
        title: 'Enterprise-Level Excellence',
        desc1: 'ZYRX provides traditional perpetual contracts, free from borrowing and roll-over fees.',
        desc2: 'These can be tailored to accommodate a broad spectrum of underlying assets and are compatible with linear, inverse, and quanto perpetuals.'
    },
    {
        title: 'Optimal Trading Environments',
        desc1: 'ZYRX delivers the chance to engage in perpetual futures trading, harnessing the optimal conditions that DeFi presents.',
        desc2: 'We take pride in our minimized slippage, reduced gas costs, and competitive trading fees.'
    },
    {
        title: 'Backing Sparse-Liquidity Assets',
        desc1: 'ZYRX enables trading of perpetuals for mid-cap and small-cap assets at attractive rates.',
        desc2: null
    },
    {
        title: 'Swift, Seamless Integration',
        desc1: 'White-label partners have the flexibility to adapt, personalize, and host ZYRX\'s UI toolkit, embed ZYRX into their current applications via SDKs and APIs, or pursue a direct on-chain integration.',
        desc2: 'Launch your dedicated perpetual futures interface in under a week.'
    },
    {
        title: 'Trustless',
        desc1: 'Your funds remain strictly within smart contract parameters. With self-custody, you\'re shielded from potential risks posed by third parties.',
        desc2: null
    },
    {
        title: 'Prime On-Chain Risk Cover',
        desc1: 'ZYRX\'s perpetuals are designed primarily for hedging purposes, realized through our competitive holding costs and the variety of perpetual options: linear, inverse, and quanto. With ZYRX, protocols have the advantage of on-chain hedging through contract trading.',
        desc2: null
    },
    {
        title: 'Total Decentralization Empowered.',
        desc1: 'The provision of liquidity, liquidation processes, and order executions are all decentralized.',
        desc2: 'Combining our white-label approach with solid on-chain governance ensures that institutional proficiency seamlessly merges with decentralization.'
    },
    {
        title: 'Supply liquidity, reap tokens',
        desc1: 'Liquidity providers benefit from the AMM\'s profit and loss without facing impermanent loss, all the while accruing fees.',
        desc2: 'All accrued earnings are stored in the liquidity pool\'s designated margin tokens like USDC or MATIC.',
    },
    {
        title: 'Next-Level Risk Navigation',
        desc1: 'Our AMM employs risk-mitigation strategies akin to those adopted in enterprise-level risk management and by clearinghouses.',
        desc2: 'To avert wrong-way risk, the ZYRX token is neither utilized in pricing nor as collateral.'
    }

]

function Features() {

    const { width } = useWindowDimensions()
    const [perPage, setPerPage] = useState(3);

    useEffect(() => {
        if (width < 768) {
            setPerPage(1)
        } else if (width < 1024) {
            setPerPage(2)
        } else {
            setPerPage(3)
        }
    }, [width])

    return (
        <div className='px-10 ml-4 mb-32' id='features'>
            <h3 className='text-3xl mb-16 font-bold'>Features</h3>
            <Splide
                options={{ perPage, autoHeight: true, arrows: false }}
                aria-labelledby="features-carousel"
            >
                {
                    data.map((item, index) => {
                        return (
                            <SplideSlide key={`${item.title}-${index}`}>
                                <FeatureCard title={item.title} desc1={item.desc1} desc2={item.desc2} />
                            </SplideSlide>
                        )
                    }
                    )
                }
            </Splide>
        </div>
    )
}

export default Features