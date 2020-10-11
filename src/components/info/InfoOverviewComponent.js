import React, {useContext} from 'react'
import InfoOverviewContainer from './InfoOverviewContainer'
import {InfoOverviewContext} from 'context/InfoOverviewContext'
import './InfoOverviewComponent.css'

const InfoOverview = () => {
    console.log('InfoOverview')
    const {infoOverview, setInfoOverview} = useContext(InfoOverviewContext)

    console.log(infoOverview)

    const toggleSkills = (e) => {
        setInfoOverview((prevState) => {
            return {
                showMoreSkills: !prevState.showMoreSkills
            }
        })
    }

    return InfoOverviewContainer({
        infoOverview,
        toggleSkills
    })
}

export default InfoOverview