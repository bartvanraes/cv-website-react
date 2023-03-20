import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import formatDate from '@/helpers/formatDate'
import formatCompanyName from '@/helpers/formatCompanyName'
import { showTechnologies, showTeamSize, renderProjectManagement } from '@/components/shared/workExperienceRenderer'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/themes/cvTheme'
import { textAlign } from '@mui/system'


function WorkExperienceItemContainer(props) {
    let projectManagement = renderProjectManagement(props.item.projectManagement, theme)    

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{
                paddingTop: theme.spacing(2)
            }} elevation={3}>
                <CardContent>
                    <Grid 
                        container 
                        justify="space-between"> 
                        <Typography variant="h5" sx={{
                            paddingLeft: theme.spacing(1),
                            paddingRight: theme.spacing(2),
                            whiteSpace: 'pre-line'
                        }}>
                            {props.item.position} - {formatCompanyName(props.item)}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                            <Typography color="textSecondary" sx={{
                                paddingLeft: theme.spacing(2),
                                paddingRight: theme.spacing(2),
                                whiteSpace: 'pre-line'
                            }}>
                                {formatDate(props.item.startDate)} - {formatDate(props.item.endDate)}
                            </Typography>  
                        </Box>                                      
                    </Grid>
                    <br />
                    <Typography color="textSecondary" variant="subtitle1" sx={{
                        paddingLeft: theme.spacing(1),
                        paddingRight: theme.spacing(2)
                    }}>
                        Outline
                    </Typography>
                    <Typography variant="subtitle1" sx={{
                            paddingLeft: theme.spacing(2),
                            paddingRight: theme.spacing(2),
                            whiteSpace: 'pre-line'
                        }}>
                        {props.item.outline}
                    </Typography> 
                    <br />
                    <Typography color="textSecondary" variant="subtitle1" sx={{
                        paddingLeft: theme.spacing(1),
                        paddingRight: theme.spacing(2)
                    }}>
                        Key responsibilities
                    </Typography>
                    <Typography variant="subtitle1" sx={{
                            paddingLeft: theme.spacing(2),
                            paddingRight: theme.spacing(2),
                            whiteSpace: 'pre-line'
                        }}>
                        {props.item.responsibilities}
                    </Typography>
                    <br />
                    <Typography color="textSecondary" variant="subtitle1" sx={{
                        paddingLeft: theme.spacing(1),
                        paddingRight: theme.spacing(2)
                    }}>
                        Key Achievements/Projects
                    </Typography>
                    <Typography variant="subtitle1" sx={{
                            paddingLeft: theme.spacing(2),
                            paddingRight: theme.spacing(2),
                            whiteSpace: 'pre-line'
                        }}>
                        {props.item.projects}
                    </Typography>
                    <br />
                    <Typography color="textSecondary" variant="subtitle1" sx={{
                        paddingLeft: theme.spacing(1),
                        paddingRight: theme.spacing(2)
                    }}>
                        Technologies
                    </Typography>
                    <Typography variant="subtitle1" sx={{
                            paddingLeft: theme.spacing(2),
                            paddingRight: theme.spacing(2),
                            whiteSpace: 'pre-line'
                        }}>
                        {showTechnologies(props.item.skills)}
                    </Typography>
                    {projectManagement}
                    <br />
                    <Typography color="textSecondary" variant="subtitle1" sx={{
                        paddingLeft: theme.spacing(1),
                        paddingRight: theme.spacing(2)
                    }}>
                        Team Size
                    </Typography>
                    <Typography variant="subtitle1" sx={{
                            paddingLeft: theme.spacing(2),
                            paddingRight: theme.spacing(2),
                            whiteSpace: 'pre-line'
                        }}>
                        {showTeamSize(props.item.teamSize)}
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    )
}

export default WorkExperienceItemContainer