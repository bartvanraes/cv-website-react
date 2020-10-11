import React, {useContext} from 'react'
import RelevantSkillOverviewContainer from './RelevantSkillOverviewContainer'
import {InfoOverviewContext} from 'context/InfoOverviewContext'
import './RelevantSkillOverviewComponent.css'

const RelevantSkillOverview = () => {
    const {infoOverview, dispatch} = useContext(InfoOverviewContext)

    return RelevantSkillOverviewContainer({
        infoOverview
    })
}

export default RelevantSkillOverview