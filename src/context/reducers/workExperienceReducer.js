import WorkExperienceDispatchType from 'enums/WorkExperienceDispatchType'

export const workExperienceReducer = (state, action) => {
    
    switch (action.type) {
        case WorkExperienceDispatchType.FILTER: 
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
            
            const displayedWorkExperiences = [
                ...state.workExperiences.filter((work, index) => {
                    let returnWork = work

                    if (filter.search && filter.search !== '') {
                        const search = filter.search.toLowerCase().trim()
                        if (!work.company.toLowerCase().includes(search) 
                            && !work.outline.toLowerCase().includes(search)
                            && !work.responsibilities.toLowerCase().includes(search)
                            && !work.projects.toLowerCase().includes(search)) {
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

                    if (returnWork !== null && filter.quitOnly !== undefined && filter.quitOnly !== null) {
                        if (filter.quitOnly && work.quit !== filter.quitOnly) {
                            returnWork = null
                        }
                    }

                    if (returnWork !== null) {
                        return returnWork
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
                displayedWorkExperiences: displayedWorkExperiences
            }
        default:
            break
    }
}