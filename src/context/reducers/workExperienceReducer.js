import WorkExperienceDispatchType from 'enums/WorkExperienceDispatchType'

export const workExperienceReducer = (state, action) => {
    console.log('workExperienceReducer')
    console.log(action.type)
    console.log(WorkExperienceDispatchType.Filter)
    switch (action.type) {
        case WorkExperienceDispatchType.Filter: 
            console.log(state)
            const prevFilter = state.filter
            
            const filter = {
                ...prevFilter,
                ...action.filter
            }

            console.log(filter)

            const displayedWorkExperiences = [
                ...state.workExperiences.filter((work, index) => {
                    let returnWork = work

                    if (filter.search && filter.search !== '') {
                        const search = filter.search.toLowerCase()
                        if (!work.employer.toLowerCase().includes(search)) {
                            returnWork = null
                        }
                    }

                    if (returnWork !== null && filter.temporaryOnly !== undefined && filter.temporaryOnly !== null) {
                        if (filter.temporaryOnly && work.temporary !== filter.temporaryOnly) {
                            returnWork = null
                        }
                    }

                    if (returnWork !== null && filter.consultancyOnly !== undefined && filter.consultancyOnly !== null) {
                        if (filter.consultancyOnly && work.consultancy !== filter.consultancyOnly) {
                            returnWork = null
                        }
                    }

                    if (returnWork !== null) {
                        return returnWork
                    }
                })
            ]

            console.log(displayedWorkExperiences)

            return {
                ...state,
                filter: filter,
                displayedWorkExperiences: displayedWorkExperiences
            }
    }
}