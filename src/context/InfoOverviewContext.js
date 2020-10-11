import React, { createContext, useReducer } from 'react'
import workExperienceData from 'data/workExperienceData'
import skillData from 'data/skillData'
import {infoOverviewReducer} from './reducers/infoOverviewReducer'

const InfoOverviewContext = createContext()

const InfoOverviewProvider = ({ children }) => {
    const [infoOverview, dispatch] = useReducer(
        infoOverviewReducer,
        {
            showMoreSkills: false,
            workExperiences: workExperienceData,
            skills: skillData,
            selectedGeneralSkill: '',
            relevantWorkExperiences: []
        }
    )

    return (
        <InfoOverviewContext.Provider value={{infoOverview, dispatch}}>
            {children}
        </InfoOverviewContext.Provider>
    )
}

export {InfoOverviewContext, InfoOverviewProvider}