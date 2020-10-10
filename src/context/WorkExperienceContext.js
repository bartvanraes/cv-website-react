import React, { createContext, useReducer } from 'react'
import workExperienceData from 'data/workExperienceData'
import {workExperienceReducer} from './reducers/workExperienceReducer'

const WorkExperienceContext = createContext()

const WorkExperienceProvider = ({ children }) => {
    const [workExperiences, dispatch] = useReducer(
        workExperienceReducer,
        {
            workExperiences: workExperienceData,
            filter: {
                search: '',
                temporaryOnly: false,
                consultancyOnly: false
            },
            displayedWorkExperiences: []
        }
    )

    return (
        <WorkExperienceContext.Provider value={{workExperiences, dispatch}}>
            {children}
        </WorkExperienceContext.Provider>
    )
}

export {WorkExperienceContext, WorkExperienceProvider}