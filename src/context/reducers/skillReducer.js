import CategoryType from 'enums/CategoryType'
import ExperienceType from 'enums/ExperienceType'
import SkillDispatchType from 'enums/SkillDispatchType'

export const skillReducer = (state, action) => {
    switch (action.type) {
        case SkillDispatchType.FILTER:
            const prevFilter = state.filter
            const filter = {
                ...prevFilter,
                ...action.filter
            }

            // if only the text search changed but nothing is commited then only change the filter, not the displayed items
            if (prevFilter.search !== filter.search && !filter.confirmTextSearch) {
                return {
                    ...state,
                    filter: filter
                }
            }
            
            const displayedSkills = [
                ...state.skills.filter((skill, index) => {
                    let returnSkill = skill
                    if (filter.search && filter.search !== '') {
                        const name = filter.search.toLowerCase().replace('.', '')
                        if (!skill.name.toLowerCase().replace('.', '').includes(name)) {
                            returnSkill = null
                        }
                    }

                    // OLD FILTERS
                    if (returnSkill !== null && filter.professionalOnly !== undefined && filter.professionalOnly !== null) {
                        if (filter.professionalOnly && skill.professional !== filter.professionalOnly) { // at the moment if not professionalOnly return everything 
                            returnSkill = null
                        }
                    }

                    if (returnSkill !== null && filter.handsonOnly !== undefined && filter.handsonOnly !== null && skill.handson !== undefined) { // at the moment if not handsonOnly return everything 
                        if (filter.handsonOnly && skill.handson !== filter.handsonOnly) {                   //  if handsonOnly, only do it for self taught skills
                            returnSkill = null
                        }
                    }

                    if (returnSkill !== null && filter.legacyOnly !== undefined && filter.legacyOnly !== null) {
                        if (filter.legacyOnly && skill.legacy !== filter.legacyOnly) {      // at the moment if not legacyOnly return everything 
                            returnSkill = null
                        }
                    }

                    // END OF OLD FILTERS

                    if (returnSkill !== null && filter.experience !== undefined && filter.experience !== null && filter.experience !== '') {
                        switch (filter.experience) {
                            case ExperienceType.PROFESSIONAL:
                                if (!skill.professional) {
                                    returnSkill = null
                                }
                                break
                            case ExperienceType.HANDS_ON:
                                if (skill.professional || !skill.handson) {
                                    returnSkill = null
                                }
                                break
                            case ExperienceType.SELF_TAUGHT:
                                if (skill.professional || skill.handson) {
                                    returnSkill = null
                                }
                                break
                        }
                    }

                    if (returnSkill !== null && filter.category !== undefined && filter.category !== null && filter.category !== '') {
                        if (skill.category !== filter.category) {
                            returnSkill = null
                        }
                    }

                    if (returnSkill !== null && filter.interestLevel !== undefined && filter.interestLevel !== null && filter.interestLevel !=='') {
                        if (skill.interestLevel !== filter.interestLevel) {
                            returnSkill = null
                        }
                    }

                    if (returnSkill !== null) {
                        return returnSkill
                    }

                    return null
                })
            ]

            if (filter.confirmTextSearch) { // reset the search filter trigger
                filter.confirmTextSearch = false
                filter.search = ''
            }

            return {
                ...state,
                filter: filter,
                displayedSkills: displayedSkills,
                displayedProgrammingSkills: [
                    ...displayedSkills.filter((skill, index) => {
                        if (skill.category === CategoryType.PROGRAMMING_SKILL) {
                            return skill
                        }
                        
                        return null
                    })
                ],
                displayedMethodologySkills: [
                    ...displayedSkills.filter((skill, index) => {
                        if (skill.category === CategoryType.METHODOLOGY) {
                            return skill
                        }

                        return null
                    })
                ],
                displayedSoftwareSkills: [
                    ...displayedSkills.filter((skill, index) => {
                        if (skill.category === CategoryType.SOFTWARE) {
                            return skill
                        }

                        return null
                    })
                ]
            }
        default:
            break
    }
}