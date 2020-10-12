import React from 'react'
import { Grid, Typography, Box, Button, Link, makeStyles } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MyLocationIcon from '@material-ui/icons/MyLocation'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import RelevantWorkExperienceOverview from './workExperiences/RelevantWorkExperienceOverviewComponent'
import RelevantSkillOverview from './skills/RelevantSkillOverviewComponent'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    iconStyle: {
        paddingRight: theme.spacing(2)
    },
    contactTextStyle: {
        
    },
    contactItemStyle: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(3)
    },
    contactSectionStyle: {
        marginBottom: theme.spacing(2)
    },
    skillBoxStyle: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2)
    },
    skillStyle: {
        background: '#FFFFFF',
        '&:hover': {
            background: '#c7cbd1'
        },
        marginBottom: theme.spacing(1),
        cursor: 'pointer'
    },
    highlightedSkillStyle: {
        background: '#dde2eb'
    },
    showMoreStyle: {
        marginLeft: theme.spacing(1)
    },
    experienceTitleStyle: {
        marginBottom: theme.spacing(2)
    },
    subtitleStyle: {
        marginBottom: theme.spacing(2)
    },
    eductionSchoolStyle: {
        marginLeft: theme.spacing(2)
    },
    educationPeriodStyle: {
        marginLeft: theme.spacing(3)
    },
    eductationContentStyle: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(3)
    }

}))


const showSkill = (props, name, rating, classes) => {
    let dots = []
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            dots.push(<FiberManualRecordIcon key={i} fontSize="small" color="primary"></FiberManualRecordIcon>)
        }
        else {
            dots.push(<FiberManualRecordIcon key={i} fontSize="small" color="secondary"></FiberManualRecordIcon>)
        }        
    }

    let combinedSkillStyle = clsx(
        classes.skillStyle
    )

    if (props.infoOverview.selectedGeneralSkill.toLowerCase() === name.toLowerCase()) {
        combinedSkillStyle = clsx(
            classes.skillStyle,
            classes.highlightedSkillStyle
        )
    }
    
    return (
        <Grid container spacing={3} key={name} className={combinedSkillStyle} onClick={(e) => props.handleGeneralSkillSelect(e, name)}>
            <Grid item xs={6} md={7}>
            {name}
            </Grid>
            <Grid item xs={6} md={5}>
            {dots}
            </Grid>
        </Grid>
    )
}

const showRelevantExperiences = (props, classes) => {
    if (props.infoOverview.relevantWorkExperiences.length === 0) {
        return
    }

    return (
        <Box>
            <Typography color="textSecondary" variant="h4" className={classes.experienceTitleStyle}>
                {props.infoOverview.selectedGeneralSkill === '' ? 'RECENT EXPERIENCE' : 'RELEVANT EXPERIENCE'}
            </Typography>
            <RelevantWorkExperienceOverview></RelevantWorkExperienceOverview>
        </Box>
    )    
}

const showRelevantSkills = (props, classes) => {
    if (props.infoOverview.relevantSkills.length === 0) {
        return
    }

    return (
        <Box>
            <Typography color="textSecondary" variant="h4" className={classes.experienceTitleStyle}>
                RELEVANT SKILLS
            </Typography>
            <RelevantSkillOverview></RelevantSkillOverview>
        </Box>
        
    )
}

function InfoOverviewContainer(props) {
    const classes = useStyles(props)    
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={11} md={11}>
                            <Typography color="textSecondary" variant="h4" className={classes.subtitleStyle}>
                                PROFILE
                            </Typography>
                            <Typography color="textPrimary" variant="body1">
                                Over 12 years of experience as a
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

                                This site was developed in React (<Link href="https://github.com/bartvanraes/cv-website-react" target="_blank" rel="noopener" color="textPrimary" variant="body1">Github</Link>), feel free to click on the skills to see the relevant work experiences and years of experience I have in them.
                             
                            </Typography>
                        </Grid>
               
                
                        <Grid item xs={12} md={8}>
                            <Typography color="textSecondary" variant="h4">
                                SKILLS
                            </Typography>
                            <Box className={classes.skillBoxStyle}>
                                {showSkill(props, '.NET (C#)', 4, classes)}
                                {showSkill(props, 'HTML CSS', 4, classes)}
                                {showSkill(props, 'Angular', 3, classes)}
                                {showSkill(props, 'Vue', 3, classes)}
                                {showSkill(props, 'Databases', 4, classes)}
                                {showSkill(props, 'Javascript', 4, classes)}
                                
                                
                                <Box hidden={!props.infoOverview.showMoreSkills}>
                                    {showSkill(props, 'Amazon AWS', 2, classes)}
                                    {showSkill(props, 'Node.js', 2, classes)}
                                    {showSkill(props, 'React', 1, classes)}
                                    {showSkill(props, 'Java', 1, classes)}
                                    {showSkill(props, 'Python', 1, classes)}
                                    {showSkill(props, 'UML Design', 2, classes)}
                                </Box>                        
                            </Box>
                            <Button onClick={props.toggleSkills} className={classes.showMoreStyle}>{ props.infoOverview.showMoreSkills ? 'Show Less' : 'Show More'}</Button>
                        </Grid>

                        <Grid item xs={12} md={12} className={classes.contactSectionStyle}>
                            <Typography color="textSecondary" variant="h4">
                                CONTACT
                            </Typography>
                            <Grid 
                                container                        
                                spacing={3}
                                className={classes.contactItemStyle}>
                                <PhoneIcon color="secondary" className={classes.iconStyle}></PhoneIcon>
                                <Typography color="textPrimary" variant="body1" className={classes.contactTextStyle}>
                                    +32 497 631450
                                </Typography>
                            </Grid>
                            <Grid 
                                container                        
                                spacing={3}
                                className={classes.contactItemStyle}>
                                <EmailIcon color="secondary" className={classes.iconStyle}></EmailIcon>
                                <Typography color="textPrimary" variant="body1" className={classes.contactTextStyle}>
                                    bart.vanraes@gmail.com
                            </Typography>
                            </Grid>
                            <Grid 
                                container                        
                                spacing={3}
                                className={classes.contactItemStyle}>
                                <LinkedInIcon color="secondary" className={classes.iconStyle}></LinkedInIcon>
                                <Link href="https://linkedin.com/in/bart-vanraes1981" target="_blank" rel="noopener" color="textPrimary" variant="body1" className={classes.contactTextStyle}>
                                    linkedin.com/in/bart-vanraes1981
                                </Link>
                            </Grid>
                            <Grid 
                                container                        
                                spacing={3}
                                className={classes.contactItemStyle}>
                                <MyLocationIcon color="secondary" className={classes.iconStyle}></MyLocationIcon>
                                <Typography color="textPrimary" variant="body1" className={classes.contactTextStyle}>
                                    Antwerpen
                                </Typography>
                            </Grid>                    
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography color="textSecondary" variant="h4" className={classes.subtitleStyle}>
                                EDUCATION
                            </Typography>
                            <Typography color="textPrimary" variant="h6" className={classes.eductionSchoolStyle}>
                                Cevora
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary" className={classes.educationPeriodStyle}>
                                SEP 2004 - DEC 2004
                            </Typography>
                            <Typography color="textPrimary" variant="body1" className={classes.eductationContentStyle}>
                                .NET Development course
                            </Typography>
                            <br />
                            <Typography color="textPrimary" variant="h6" className={classes.eductionSchoolStyle}>
                                KDG Hogeschool Groenplaats
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary" className={classes.educationPeriodStyle}>
                                SEP 1999 - JUN 2002
                            </Typography>
                            <Typography color="textPrimary" variant="body1" className={classes.eductationContentStyle}>
                                Bachelor IT
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    {showRelevantExperiences(props, classes)}
                    {showRelevantSkills(props, classes)}
                </Grid>
            </Grid>

        </div>
    )
}

export default InfoOverviewContainer