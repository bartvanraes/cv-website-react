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
                ...action.skill
            }

            console.log(filter)

            const displayedSkills = [
                ...state.skills.filter((skill, index) => {
                    let returnSkill = skill
                    if (filter.name && filter.name !== '') {
                        const name = filter.name.toLowerCase().replace('.', '')
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
                displayedSoftwareSkills: {
                    ...displayedSkills.filter((skill, index) => {
                        if (skill.category === CategoryType.SOFTWARE) {
                            return skill
                        }
                    })
                }
            }
        break
    }
}