import React from 'react'
import { Grid } from '@mui/material'
import RelevantWorkExperienceItem from './RelevantWorkExperienceItemComponent'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/themes/cvTheme'

const showWorkExperiences = (workExperiences) => {
    return workExperiences.map((work) => <Grid item xs={12} key={work.startDate}>
                                            <RelevantWorkExperienceItem key={work.startDate} item={work}>
                                        </RelevantWorkExperienceItem></Grid>)
}

function RelevantWorkExperienceOverviewContainer(props) {
    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={3} sx={{
                marginBottom: theme.spacing(2)
            }}> 
                {showWorkExperiences(props.infoOverview.relevantWorkExperiences)}
            </Grid>
        </ThemeProvider>
    )
}

export default RelevantWorkExperienceOverviewContainer