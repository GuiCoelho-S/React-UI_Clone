import { Icon } from "../Button"
import { Page, ButtonRight, ButtonLeft } from "./style"
import Left from '../../assets/icons/angle-left-solid.svg'
import Right from '../../assets/icons/angle-right-solid.svg'
import { useState } from 'react'
import HomePage from '../../Pages/Home'
import FitnessPage from '../../Pages/FitnessPage'
import BookPage from '../../Pages/BookPage'



const Pages = () => {

    const [index, setIndex] = useState(0);

    const pagesList = [< HomePage />, <FitnessPage />,< BookPage />];

    function nextPage(){if(index < 2){setIndex(index+1)}}
    function previousPage(){if(index !== 0){setIndex(index-1)}}

    console.log(index)
    return(
        <Page>
            {
                pagesList[index]
            }
            <ButtonLeft><button onClick={previousPage}><Icon src={Left} /></button></ButtonLeft>
            <ButtonRight><button onClick={nextPage}><Icon src={Right} /></button></ButtonRight>
            
        </Page>
    )
}

export default Pages