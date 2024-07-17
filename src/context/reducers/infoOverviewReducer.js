import InfoOverviewDispatchType from '@/enums/InfoOverviewDispatchType'

export const infoOverviewReducer = (state, action) => {
    
    switch (action.type) {
        case InfoOverviewDispatchType.TOGGLE_SHOW_MORE:
            return {
                ...state,
                showMoreSkills: !state.showMoreSkills
            }
        case InfoOverviewDispatchType.TOGGLE_EXPAND_WORK:
            const expandedWork = action.expandedWorkExperience === state.expandedWorkExperience ? '' : action.expandedWorkExperience  
            return {
                ...state,
                expandedWorkExperience: expandedWork
            }
        case InfoOverviewDispatchType.GENERAL_SKILL_SELECTED:
            const defaultWorkExperiences = ['4D Vision', 'Pionira', 'Twikit']
            const defaultSkills = ['.NET (C#)', 'Angular', 'VueJS', 'Python', 'React', 'Java']

            const generalSkill = action.selectedGeneralSkill.toLowerCase()
            // the skills are all by name, using this as a key is far from perfect but since I don't have unique IDs this will do
            const relatedTech = {
                '.net (c#)': ['.NET', 'ASP.NET', 'ASP.NET MVC', '.NET Core'],
                'html css': ['Javascript', 'Typescript', 'ASP.NET', 'ASP.NET MVC', 'Angular', 'VueJS', 'React'],
                'angular': ['AngularJS', 'Ngrx', 'Typescript'], // yeah yeah, I know, it's definitely not the same
                'vue': ['VueJS', 'Vue 3'],
                'databases': ['SQL Server', 'SQLAlchemy', 'Oracle', 'Firebird', 'Oracle', 'PostgreSQL', 'MySQL', 'MongoDB'],
                'javascript': ['Angular', 'ASP.NET', 'ASP.NET MVC', 'VueJS', 'Vue 3', 'React', 'Typescript'],
                'cloud': ['Amazon AWS', 'Docker', 'Azure'],
                'node.js': ['NodeJS', 'Express.js', 'NestJS (node.js)'],
                'react': ['Redux', 'Context API'],
                'java': ['Spring', 'Spring Boot', 'Thymeleaf', 'Project Lombok', 'IntelliJ IDEA', 'Mockito'],
                'python': ['PyCharm', 'Machine Learning', 'Tensorflow 2.0'],
                'uml design': ['Rational Rose', 'Technical Analysis']
            }
            
            const relevantWorkExperiences = state.workExperiences.filter((work) => {
                if (generalSkill === '' && defaultWorkExperiences.find(x => x === work.company)) { // return the most recent jobs as default                    
                    return work
                }
                if (work.skills.find(x => x.toLowerCase() === generalSkill) // if the skill matches or one of it's relatives
                    || (relatedTech[generalSkill] !== undefined && work.skills.find(x => relatedTech[generalSkill].find(y => y.toLowerCase() === x.toLowerCase())))) {
                    return work
                }
                return null
            })

            const relevantSkills = state.skills.filter((skill) => {
                if (generalSkill === '' && defaultSkills.find(x => x === skill.name)) { // return the most recent used skills as default
                    return skill
                }

                if (skill.name.toLowerCase() === generalSkill.toLowerCase()
                    || (relatedTech[generalSkill] !== undefined && relatedTech[generalSkill].find(x => x.toLowerCase() === skill.name.toLowerCase()))) {
                        return skill
                    }
                return null
            })

            return {
                ...state,
                selectedGeneralSkill: generalSkill,
                relevantWorkExperiences,
                relevantSkills
            }
        default:
            break
    }
}