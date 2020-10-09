import React, { createContext, useState } from 'react'
import skillData from './../data/skillData'

const SkillContext = createContext()

const SkillProvider = ({ children }) => {
    const [skills, setSkills] = useState(
        skillData
    )

    const saveSkill = skill => {
        // not used
    }

    return (
        <SkillContext.Provider value={{skills, saveSkill}}>
            {children}
        </SkillContext.Provider>
    )
}

export {SkillContext, SkillProvider}