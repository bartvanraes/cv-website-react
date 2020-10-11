const formatCompanyName = workExperience => {
    if (workExperience.consultancy && workExperience.consultancyCompany !== undefined) {
        return `${workExperience.company} (consultancy via ${workExperience.consultancyCompany})`
    }

    if (workExperience.temporary) {
        return `${workExperience.company} (temporary contract)`
    }

    return workExperience.company
}

export default formatCompanyName