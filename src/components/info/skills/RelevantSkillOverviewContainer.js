import React from 'react'
import { Grid } from '@mui/material'
import SkillItem from '@/components/skills/SkillItemComponent'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/themes/cvTheme'


const showSkills = (skills, theme) => {
    return skills.map((skill) => <Grid item xs={6} key={skill.name} sx={{
        paddingBottom: theme.spacing(1)
    }}><SkillItem key={skill.name} item={skill}></SkillItem></Grid>)
}

function RelevantSkillOverviewContainer(props) {
    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={3}> 
                {showSkills(props.infoOverview.relevantSkills, theme)}
            </Grid>
        </ThemeProvider>
    )
}

export default RelevantSkillOverviewContainer