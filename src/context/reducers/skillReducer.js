import SkillDispatchType from 'enums/SkillDispatchType'

export const skillReducer = (state, action) => {
    switch (action.type) {
        case SkillDispatchType.FILTER:
            console.log('letsfilter')
            return {
                ...state,
                displayedSkills: [
                ...state.skills.filter((skill, index) => {
                    let returnSkill = skill
                    if (action.skill.name) {
                        const name = action.skill.name.toLowerCase().replace('.', '')
                        if (!skill.name.toLowerCase().replace('.', '').includes(name)) {
                            returnSkill = null
                        }
                    }

                    if (returnSkill !== null && action.skill.professional !== undefined) {
                        if (skill.professional !== action.skill.professional) {
                            returnSkill = null
                        }
                    }

                    if (returnSkill !== null && action.skill.handson !== undefined && skill.handson !== undefined) {
                        if (skill.handson !== action.skill.handson) {
                            returnSkill = null
                        }
                    }

                    if (returnSkill !== null && action.skill.legacy !== undefined) {
                        if (skill.legacy !== action.skill.legacy) {
                            returnSkill = null
                        }
                    }

                    if (returnSkill !== null && action.skill.category !== undefined) {
                        if (skill.category !== action.skill.category) {
                            returnSkill = null
                        }
                    }

                    if (returnSkill !== null) {
                        return returnSkill
                    }
                })
            ]}
    }
}