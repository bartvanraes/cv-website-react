import React from 'react'
import ProjectManagementType from '@/enums/ProjectManagementType'
import Typography from '@mui/material/Typography'
import TeamSizeType from '@/enums/TeamSizeType'

const showTechnologies = techList => {
    return techList.join(', ')
}

const showProjectManagement = (projectManagement) => {
    switch(projectManagement) {
        case ProjectManagementType.NONE:
            return 'None'
        case ProjectManagementType.AGILE_SCRUM:
            return 'Agile/Scrum'
        case ProjectManagementType.WATERFALL:
            return 'Waterfall'
        default:
            return ''
    }
}

const renderProjectManagement = (projectManagement, theme) => {
    if (projectManagement && projectManagement !== ProjectManagementType.NONE) {
        return (
            <div>
                <br />
                <Typography color="textSecondary" variant="subtitle1" sx={{
                    paddingLeft: theme.spacing(1),
                    paddingRight: theme.spacing(2)
                }}>
                    Project Management
                </Typography>
                <Typography variant="subtitle1" sx={{
                    paddingLeft: theme.spacing(2),
                    paddingRight: theme.spacing(2),
                    whiteSpace: 'pre-line'
                }}>
                {showProjectManagement(projectManagement)}
                </Typography>
            </div>
        )
        
    }

    return null
}

const showTeamSize = (teamSize) => {
    switch(teamSize) {
        case TeamSizeType.SOLO:
            return '1'
        case TeamSizeType.SMALL:
            return 'Small (2-4)'
        case TeamSizeType.MEDIUM:
            return 'Medium (5-9)'
        case TeamSizeType.LARGE:
            return 'Large (+10)'
        default:
            return ''
    }
}

export { showTechnologies, showProjectManagement, showTeamSize, renderProjectManagement }