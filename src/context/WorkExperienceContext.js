import React, { createContext, useState } from 'react'
import workExperienceData from 'data/workExperienceData'

const WorkExperienceContext = createContext()

const WorkExperienceProvider = ({ children }) => {
    const [workExperiences, setWorkExperiences] = useState(
        workExperienceData
    )

    const saveWorkExperience = workExperience => {
        // not used
    }

    return (
        <WorkExperienceContext.Provider value={{workExperiences, saveWorkExperience}}>
            {children}
        </WorkExperienceContext.Provider>
    )
}

export {WorkExperienceContext, WorkExperienceProvider}