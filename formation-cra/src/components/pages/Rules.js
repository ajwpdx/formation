import React, { useState } from 'react'
import Header from '../layouts/Header'
import page1 from '../../images/rule-book/page-1.PNG'
import page2 from '../../images/rule-book/page-2.PNG'
import page3 from '../../images/rule-book/page-3.PNG'
import page4 from '../../images/rule-book/page-4.PNG'
import page5 from '../../images/rule-book/page-5.PNG'
import page6 from '../../images/rule-book/page-6.PNG'
import page7 from '../../images/rule-book/page-7.PNG'
import page8 from '../../images/rule-book/page-8.PNG'
import page9 from '../../images/rule-book/page-9.PNG'
import page10 from '../../images/rule-book/page-10.PNG'
import page11 from '../../images/rule-book/page-11.PNG'
import page12 from '../../images/rule-book/page-12.PNG'


const ruleBook = [[page1], [page2,page3], [page4, page5], [page6, page7], [page8, page9], [page10, page11], [page12]]

const Rules = (props) => {
    
    const [turnPage, setTurnPage] = useState(0)

    const turnBack = () => {
        if (turnPage !== 0){
            setTurnPage(turnPage-1)
        } 
    }
    
    const turnForward = () => {
        if (turnPage < ruleBook.length - 1){
            setTurnPage(turnPage+1)
        } 
    }
    
    
    return (
        <div id='rules'>
            <Header />
            <div className='rule-book-container'>
                <button className={turnPage === 0 ? "hidden" : ""} onClick={turnBack}>&#8678;</button>
                <div className='rule-book'>
                    {ruleBook[turnPage].map(image => (<img src={image} className='rule-page' alt='rule-page'/>))}

                </div>
                <button className={turnPage === ruleBook.length - 1 ? "hidden" : ""} onClick={turnForward}>&#8680;</button>
            </div>
            <div className='rule-book-pdf'>
                <a  target='_blank' rel="noreferrer" href="https://www.dropbox.com/s/f4roiybb9ie6cjm/Formation_RuleBook.pdf?dl=0">Rulebook PDF</a>
            </div>
        </div>
    )
}

export default Rules
