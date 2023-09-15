import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';


function Expander(props) {

    const [expanded, setExpanded] = useState(false);

    const handleChange = () => {
        setExpanded(!expanded);
    };
    return (
        <Accordion className='accordion' expanded={expanded} onChange={handleChange}>
            <AccordionSummary expandIcon={expanded ? <AiOutlineMinus color='#664ADF' /> : <AiOutlinePlus color='#664ADF' />}>
                <h3 className='text-2xl'>{props.question}</h3>
            </AccordionSummary>
            <AccordionDetails>
                <div className='flex flex-col gap-4'>
                    {props.ans1 && <p style={{ fontSize: '22px' }}>{props.ans1}</p>}
                    {props.ans2 && <p style={{ fontSize: '22px' }}>{props.ans2}</p>}
                    {props.ans3 && <p style={{ fontSize: '22px' }}>{props.ans3}</p>}
                    {props.ans4 && <p style={{ fontSize: '22px' }}>{props.ans4}</p>}
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default Expander