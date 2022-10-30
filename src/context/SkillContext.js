import React, { createContext, useReducer } from 'react'
import skillData from 'data/skillData'
import {skillReducer} from './reducers/skillReducer'

const SkillContext = createContext()

const SkillProvider = ({ children }) => {
    const [skills, dispatch] = useReducer(
        skillReducer,
        {
            skills: skillData,
            filter: {
                search: '',
                professionalOnly: false,
                legacyOnly: null,
                category: '',
                interestLevel: '',
                experience: '',
                handsonOnly: true,
                confirmTextSearch: false
            },
            displayedSkills: [],
            displayedProgrammingSkills: [],
            displayedMethodologySkills: [],
            displayedSoftwareSkills: []
        }
        
    )

    /*const saveSkill = skill => {
        // not used
    }*/

    return (
        <SkillContext.Provider value={{skills, dispatch}}>
            {children}
        </SkillContext.Provider>
    )
}

export {SkillContext, SkillProvider}