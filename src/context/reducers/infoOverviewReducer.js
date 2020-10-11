import InfoOverviewDispatchType from 'enums/InfoOverviewDispatchType'

export const infoOverviewReducer = (state, action) => {
    const defaultWorkExperiences = ['Twikit', 'Geo-IT', 'ScriptBook']
    switch (action.type) {
        case InfoOverviewDispatchType.TOGGLE_SHOW_MORE:
            return {
                ...state,
                showMoreSkills: !state.showMoreSkills
            }
        case InfoOverviewDispatchType.GENERAL_SKILL_SELECTED:
            const generalSkill = state.selectedGeneralSkill

            const relevantWorkExperiences = state.workExperiences.filter((work) => {
                if (generalSkill === '' && defaultWorkExperiences.find(x => x === work.company)) { // return the most recent jobs as default                    
                    return work
                }
                if (work.skills.find(x => x === generalSkill)) {
                    return work
                }
            })

            return {
                ...state,
                selectedGeneralSkill: generalSkill,
                relevantWorkExperiences: relevantWorkExperiences
            }
    }
}