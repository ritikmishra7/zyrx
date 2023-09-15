import React from 'react'
import Expander from './Expander'

const data = [
    {
        question: 'How do I initiate trades on ZYRX?',
        ans1: 'To engage in trading on the ZYRX platform, you have two options. You can either utilize a broker-provided frontend or directly engage with ZYRX\'s smart contracts by employing a Node SDK. It\'s worth noting that ZYRX intentionally refrains from offering its own frontend interface to bolster decentralization and enhance resistance against censorship.',
        ans2: null,
        ans3: null,
        ans4: null
    },
    {
        question: 'How do I brand ZYRX under my own label?',
        ans1: 'ZYRX provides versatile white-labeling solutions, which encompass a Node SDK, a UI kit, and contract integrations.',
        ans2: 'The readily available UI kit from ZYRX simplifies the process of creating a customized frontend. By forking, branding, and hosting your unique UI, you can swiftly commence collecting broker fees. Additionally, ZYRX\'s Node SDK facilitates the integration of ZYRX\'s perpetuals into the backend of your existing application, thereby expanding your product offering.',
        ans3: 'For brokers, the option exists to seamlessly link ZYRX to their current applications using either a Node SDK or REST API.',
        ans4: 'Contract-trading presents the opportunity for direct on-chain integration, facilitating efficient on-chain hedging strategies.'
    },
    {
        question: 'How can I profit from white-labeling with ZYRX?',
        ans1: 'You can generate broker fees from all trading volume conducted through your frontend or application. ZYRX offers brokers secure access to a DEX of institutional quality, presenting the opportunity to create a substantial revenue stream via its built-in broker fee mechanism. Notably, all broker fees are directly transferred to the broker\'s wallet, ensuring brokers maintain complete control over their funds.',
        ans2: 'To become a participant on ZYRX, brokers are required to invest a minimum of $100 into the default fund. The magnitude of this investment determines the broker\'s tier, which subsequently influences the trading conditions available to their traders. Higher-tier status offers more favorable trading conditions, allowing brokers to set higher broker fees while still offering competitive terms to their traders.',
        ans3: null,
        ans4: null
    },
    {
        question: 'What hazards await brokers using ZYRX?',
        ans1: 'On ZYRX, brokers maintain custodial control over their funds, eliminating any wallet-related risks. In the unlikely event of a smart contract exploit, only the funds of traders who are actively engaged in trades may be susceptible to potential losses.',
        ans2: 'Brokers are responsible for the management of their own keys and addresses and have the flexibility to migrate their wallet address as needed.',
        ans3: 'It\'s important to note that the ZYRX token is not utilized for pricing or as collateral, which means that its price fluctuations do not introduce any additional risks for brokers, beyond the typical market risks.',
        ans4: 'Traders, on the other hand, are exposed to market risks and the inherent risks associated with trading on the decentralized Automated Market Maker (AMM). In the event of AMM insolvency, any losses incurred are distributed proportionally among traders who have open positions.'
    },
    {
        question: 'How can liquidity providers engage with ZYRX and what advantages do they gain?',
        ans1: 'Liquidity providers have the option to deposit their funds into the participation fund using the collateral currency of their preferred liquidity pool, which could be currencies like USDC or stETH. By doing so, they gain eligibility to partake in the protocol\'s Profit and Loss (PnL) as well as the fees generated within the token associated with their chosen liquidity pool. This allows them to earn mature tokens that are distinct from the protocol itself.',
        ans2: null,
        ans3: null,
        ans4: null
    },
    {
        question: 'What challenges confront liquidity providers on ZYRX?',
        ans1: 'On ZYRX, liquidity providers deposit their funds into smart contracts, where these funds are held in the custody of the smart contract. It\'s important to be aware that, in the unlikely event of a smart contract exploit, the funds belonging to liquidity providers may be exposed to potential losses.',
        ans2: 'It\'s worth noting that the ZYRX token does not serve as a reward token for liquidity providers. Therefore, any price fluctuations in the ZYRX token do not introduce any risks for liquidity providers.',
        ans3: 'Liquidity providers do, however, face market risks, and in cases where the margin account for a perpetual is insufficient to cover trader obligations, the AMM fund and participation fund come into play. If the AMM fund for a particular perpetual becomes empty, that perpetual is settled. Additionally, if the default fund for a liquidity pool becomes depleted, it results in the settlement of all perpetuals within that pool.',
        ans4: null
    },
    {
        question: 'How does ZYRX achieve its top-tier trading environment?',
        ans1: 'ZYRX distinguishes itself as a leading DeFi platform by providing the most favorable trading conditions in the market, as detailed in our Medium article. This superiority is attributed to ZYRX\'s adoption of a derivative pricing methodology inspired by traditional finance principles, coupled with the implementation of risk-mitigation strategies akin to those employed by enterprise-wide risk management and clearing houses. These pioneering techniques, unique within the DeFi space, empower ZYRX\'s automated market maker (AMM) to deliver exceptional trading conditions.',
        ans2: null,
        ans3: null,
        ans4: null
    },
    {
        question: 'How can I get involved in ZYRX governance and what\'s in it for me?',
        ans1: 'Owning $ZYRX, the native token of the ZYRX protocol, grants you the privilege to engage in the governance of the protocol. ZYRX, being a fully decentralized platform with sophisticated governance capabilities, empowers its token holders to influence the trajectory of the protocol and partake in its achievements. Further details regarding the mechanics and rewards associated with protocol governance will be disclosed in the near future.',
        ans2: null,
        ans3: null,
        ans4: null
    },
]

function Faq() {
    return (
        <div id='faq' className='flex flex-col md:flex-row lg:flex-row justify-between px-10 mb-48 mx-auto gap-10'>
            <div className='mt-4 ml-4 flex justify-start items-start w-full md:w-2/6 lg:w-2/5 h-full'>
                <h3 className='text-3xl font-bold'>FAQ</h3>
            </div>
            <div className='flex flex-col gap-4 mt-4 ml-4 text-2xl pr-6 w-full'>
                <div className='flex flex-col gap-6'>
                    {
                        data.map((item, index) => (
                            <Expander key={`${item.question}-${index}`} question={item.question} ans1={item.ans1} ans2={item.ans2} ans3={item.ans3} ans4={item.ans4} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq