import React from 'react'
import { Grid, Typography, Box, Button, Link } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MyLocationIcon from '@mui/icons-material/MyLocation'
import CakeIcon from '@mui/icons-material/Cake'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import RelevantWorkExperienceOverview from './workExperiences/RelevantWorkExperienceOverviewComponent'
import RelevantSkillOverview from './skills/RelevantSkillOverviewComponent'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/themes/cvTheme'


const showSkill = (props, name, rating, theme) => {
    let dots = []
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            dots.push(<FiberManualRecordIcon key={i} fontSize="small" color="primary"></FiberManualRecordIcon>)
        }
        else {
            dots.push(<FiberManualRecordIcon key={i} fontSize="small" color="secondary"></FiberManualRecordIcon>)
        }        
    }

    let combinedSkillStyle = {
        background: theme.palette.background.default,
        '&:hover': {
            background: '#c7cbd1'
        },
        padding: theme.spacing(1.5),
        cursor: 'pointer'
    }

    if (props.infoOverview.selectedGeneralSkill.toLowerCase() === name.toLowerCase()) {
        combinedSkillStyle = {
            background: theme.palette.background.default,
            '&:hover': {
                background: '#c7cbd1'
            },
            padding: theme.spacing(1.5),
            cursor: 'pointer',
            background: '#dde2eb'
        }
    }
   
    return (
        <Grid container spacing={0} key={name} sx={combinedSkillStyle} onClick={(e) => props.handleGeneralSkillSelect(e, name)}>           
            <Grid item xs={6} md={7}>
            {name}
            </Grid>
            <Grid item xs={6} md={5}>
            {dots}
            </Grid>
        </Grid>
    )
}

const showRelevantExperiences = (props, theme) => {
    if (props.infoOverview.relevantWorkExperiences.length === 0) {
        return
    }

    return (
        <Box>
            <Typography color="textSecondary" variant="h4">
                {props.infoOverview.selectedGeneralSkill === '' ? 'RECENT EXPERIENCE' : 'RELEVANT EXPERIENCE'}
            </Typography>
            <Typography variant="body2" color="textPrimary" sx={{
                marginBottom: theme.spacing(2)
                }}>
                (select a work experience to see more details)
            </Typography>
            <RelevantWorkExperienceOverview></RelevantWorkExperienceOverview>
        </Box>
    )    
}

const showRelevantSkills = (props, theme) => {
    if (props.infoOverview.relevantSkills.length === 0) {
        return
    }

    return (
        <Box>
            <Typography color="textSecondary" variant="h4" sx={{
                marginBottom: theme.spacing(2)
                }}>
                RELEVANT SKILLS
            </Typography>
            <RelevantSkillOverview></RelevantSkillOverview>
        </Box>
        
    )
}

function InfoOverviewContainer(props) {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={11} md={11}>
                                <Typography color="textSecondary" variant="h4" sx={{
                                    marginBottom: theme.spacing(2)
                                }}>
                                    PROFILE
                                </Typography>
                                <Typography color="textPrimary" variant="body1">
                                    Over 13 years of experience as a
                                    software engineer/analyst, both in
                                    consultancy and in-house
                                    development.
                                </Typography>
                                <Typography color="textPrimary" variant="body1">                            
                                    Constantly improving my software
                                    development skills and keeping up
                                    to date with the latest trends.
                                    Always aiming for the highest
                                    quality.
                                </Typography>
                                <br />
                                <Typography color="textPrimary" variant="body1">
                                    This site was developed in React (
                                        <Link href="https://github.com/bartvanraes/cv-website-react" target="_blank" rel="noopener" color="textPrimary" variant="body1">Github</Link>
                                        ), feel free to click on the skills to see the relevant work experiences and years of experience that I have in them.
                                </Typography>                            
                            </Grid>
                
                    
                            <Grid item xs={12} md={8}>
                                <Typography color="textSecondary" variant="h4">
                                    SKILLS
                                </Typography>
                                <Typography variant="body2" color="textPrimary">
                                    (select a skill to see related experience)
                                </Typography>
                                <Box sx={{
                                    marginLeft: theme.spacing(2),
                                    marginTop: theme.spacing(2),
                                    background: theme.palette.background.default
                                }}>
                                    {showSkill(props, '.NET (C#)', 4, theme)}
                                    {showSkill(props, 'HTML CSS', 4, theme)}
                                    {showSkill(props, 'Angular', 4, theme)}
                                    {showSkill(props, 'Vue', 3, theme)}
                                    {showSkill(props, 'Databases', 4, theme)}
                                    {showSkill(props, 'Javascript', 4, theme)}
                                    
                                    
                                    <Box hidden={!props.infoOverview.showMoreSkills}>
                                        {showSkill(props, 'Cloud', 2, theme)}
                                        {showSkill(props, 'Node.js', 2, theme)}
                                        {showSkill(props, 'React', 2, theme)}
                                        {showSkill(props, 'Java', 1, theme)}
                                        {showSkill(props, 'Python', 1, theme)}
                                        {showSkill(props, 'UML Design', 2, theme)}
                                    </Box>                        
                                </Box>
                                <Button onClick={props.toggleSkills} sx={{
                                    marginLeft: theme.spacing(1)
                                }}>{ props.infoOverview.showMoreSkills ? 'Show Less' : 'Show More'}</Button>
                            </Grid>

                            <Grid item xs={12} md={12} sx={{
                                    marginBottom: theme.spacing(2)
                                }}>
                                <Typography color="textSecondary" variant="h4">
                                    CONTACT
                                </Typography>
                                <Grid 
                                    container                        
                                    spacing={3}
                                    sx={{
                                        marginLeft: theme.spacing(2),
                                        marginTop: theme.spacing(3)
                                    }}>
                                    <PhoneIcon color="secondary" sx={{
                                        paddingRight: theme.spacing(2)
                                    }}></PhoneIcon>
                                    <Typography color="textPrimary" variant="body1">
                                        +32 497 631450
                                    </Typography>
                                </Grid>
                                <Grid 
                                    container                        
                                    spacing={3}
                                    sx={{
                                        marginLeft: theme.spacing(2),
                                        marginTop: theme.spacing(3)
                                    }}>
                                    <EmailIcon color="secondary" sx={{
                                        paddingRight: theme.spacing(2)
                                    }}></EmailIcon>
                                    <Typography color="textPrimary" variant="body1">
                                        <Link href="mailto:bart.vanraes@gmail.com">bart.vanraes@gmail.com</Link>
                                </Typography>
                                </Grid>
                                <Grid 
                                    container                        
                                    spacing={3}
                                    sx={{
                                        marginLeft: theme.spacing(2),
                                        marginTop: theme.spacing(3)
                                    }}>
                                    <LinkedInIcon color="secondary" sx={{
                                        paddingRight: theme.spacing(2)
                                    }}></LinkedInIcon>
                                    <Link href="https://linkedin.com/in/bart-vanraes1981" target="_blank" rel="noopener" color="textPrimary" variant="body1">
                                        linkedin.com/in/bart-vanraes1981
                                    </Link>
                                </Grid>
                                <Grid 
                                    container                        
                                    spacing={3}
                                    sx={{
                                        marginLeft: theme.spacing(2),
                                        marginTop: theme.spacing(3)
                                    }}>
                                    <MyLocationIcon color="secondary" sx={{
                                        paddingRight: theme.spacing(2)
                                    }}></MyLocationIcon>
                                    <Typography color="textPrimary" variant="body1">
                                        Antwerpen
                                    </Typography>
                                </Grid>     
                                <Grid
                                    container
                                    spacing={3}
                                    sx={{
                                        marginLeft: theme.spacing(2),
                                        marginTop: theme.spacing(3)
                                    }}>
                                        <CakeIcon color="secondary" sx={{
                                        paddingRight: theme.spacing(2)
                                    }}></CakeIcon>
                                        <Typography color="textPrimary" variant="body1">
                                            02/07/1981
                                    </Typography>
                                </Grid>          
                                <Grid
                                    container
                                    spacing={3}
                                    sx={{
                                        marginLeft: theme.spacing(2),
                                        marginTop: theme.spacing(3)
                                    }}>
                                        <EuroSymbolIcon color="secondary" sx={{
                                        paddingRight: theme.spacing(2)
                                    }}></EuroSymbolIcon>
                                        <Typography color="textPrimary" variant="body1">
                                            Employee
                                    </Typography>
                                </Grid>
                                <Grid
                                    container
                                    spacing={3}
                                    sx={{
                                        marginLeft: theme.spacing(2),
                                        marginTop: theme.spacing(3)
                                    }}>
                                        <EventAvailableIcon color="secondary" sx={{
                                        paddingRight: theme.spacing(2)
                                    }}></EventAvailableIcon>
                                        <Typography color="textPrimary" variant="body1">
                                            In a VDAB career guidance program<br /> Not available for projects
                                    </Typography>
                                </Grid>               
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Typography color="textSecondary" variant="h4" sx={{
                                    marginBottom: theme.spacing(2)
                                }}>
                                    EDUCATION
                                </Typography>
                                <Typography color="textPrimary" variant="h6" sx={{
                                    marginLeft: theme.spacing(2)
                                }}>
                                    Cevora
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" sx={{
                                    marginLeft: theme.spacing(3)
                                    }}>
                                    SEP 2004 - DEC 2004
                                </Typography>
                                <Typography color="textPrimary" variant="body1" sx={{
                                    marginTop: theme.spacing(1),
                                    marginLeft: theme.spacing(3)
                                }}>
                                    .NET Development course
                                </Typography>
                                <br />
                                <Typography color="textPrimary" variant="h6" sx={{
                                    marginLeft: theme.spacing(2)
                                }}>
                                    KDG Hogeschool Groenplaats
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" sx={{
                                    marginLeft: theme.spacing(3)
                                    }}>
                                    SEP 1999 - JUN 2002
                                </Typography>
                                <Typography color="textPrimary" variant="body1" sx={{
                                    marginTop: theme.spacing(1),
                                    marginLeft: theme.spacing(3)
                                }}>
                                    Bachelor IT
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {showRelevantExperiences(props, theme)}
                        {showRelevantSkills(props, theme)}
                        <Box sx={{
                            marginTop: theme.spacing(3)
                        }}>
                            <Typography color="textSecondary" variant="h4" sx={{
                                    marginBottom: theme.spacing(2)
                                }}>
                                HOBBIES
                            </Typography>
                            <Typography color="textPrimary" variant="h6" sx={{
                                    marginLeft: theme.spacing(2)
                                }}>
                                Travel | Jogging | Concerts | Gaming | Social events
                            </Typography>
                        </Box>
                    </Grid>                
                </Grid>

            </div>
        </ThemeProvider>
    )
}

export default InfoOverviewContainer