import CategoryType from 'enums/CategoryType'
import SkillDispatchType from 'enums/SkillDispatchType'

export const skillReducer = (state, action) => {
    switch (action.type) {
        case SkillDispatchType.FILTER:
            console.log('letsfilter')
            //console.log(action.skill)
            const prevFilter = state.filter
            const filter = {
                ...prevFilter,
                ...action.filter
            }

            console.log(filter)
            console.log(prevFilter.search)
            console.log(filter.search)
            console.log(filter.confirmTextSearch)

            // if only the text search changed but nothing is commited then only change the filter, not the displayed items
            if (prevFilter.search !== filter.search && !filter.confirmTextSearch) {
                console.log('ended filtering')
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

                    if (returnSkill !== null && filter.category !== undefined && filter.category !== null && filter.category !== '') {
                        if (skill.category !== filter.category) {
                            returnSkill = null
                        }
                    }

                    if (returnSkill !== null) {
                        return returnSkill
                    }
                })
            ]

            if (filter.confirmTextSearch) { // reset the search filter trigger
                filter.confirmTextSearch = false
                filter.search = ''
                console.log('filter reset')
                console.log(filter)
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
                    })
                ],
                displayedMethodologySkills: [
                    ...displayedSkills.filter((skill, index) => {
                        if (skill.category === CategoryType.METHODOLOGY) {
                            return skill
                        }
                    })
                ],
                displayedSoftwareSkills: [
                    ...displayedSkills.filter((skill, index) => {
                        if (skill.category === CategoryType.SOFTWARE) {
                            return skill
                        }
                    })
                ]
            }
        break
    }
}