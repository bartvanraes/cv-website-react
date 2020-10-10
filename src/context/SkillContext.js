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
                name: '',
                professionalOnly: false,
                legacyOnly: null,
                category: '',
                handsonOnly: true
            },
            displayedSkills: []
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