import React, {useContext} from 'react'
import RelevantWorkExperienceItemContainer from './RelevantWorkExperienceItemContainer'
import InfoOverviewDispatchType from 'enums/InfoOverviewDispatchType'
import {InfoOverviewContext} from 'context/InfoOverviewContext'
import './RelevantWorkExperienceItemComponent.css'

const RelevantWorkExperienceItem = (props) => {
    const {infoOverview, dispatch} = useContext(InfoOverviewContext)

    const toggleExpand = (e) => {
        dispatch({ type: InfoOverviewDispatchType.TOGGLE_EXPAND_WORK,  
            expandedWorkExperience: props.item.company
        })
    }
    return RelevantWorkExperienceItemContainer({
        ...props,
        infoOverview,
        toggleExpand
    })
}

export default RelevantWorkExperienceItem