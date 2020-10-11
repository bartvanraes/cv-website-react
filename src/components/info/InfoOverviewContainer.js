import React from 'react'
import { Grid, Typography, Box, Button, makeStyles } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MyLocationIcon from '@material-ui/icons/MyLocation'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

const useStyles = makeStyles(theme => ({
    iconStyle: {
        paddingRight: theme.spacing(2)
    },
    contactTextStyle: {
        
    },
    contactItemStyle: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(3)
    },
    skillStyle: {
        marginLeft: theme.spacing(2),
    },
    showMoreStyle: {
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1)
    }
}))

const showSkill = (name, rating) => {
    let dots = []
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            dots.push(<FiberManualRecordIcon key={i} fontSize="small" color="primary"></FiberManualRecordIcon>)
        }
        else {
            dots.push(<FiberManualRecordIcon key={i} fontSize="small" color="secondary"></FiberManualRecordIcon>)
        }        
    }
    
    return (
        <Grid container spacing={3} key={name}>
            <Grid item xs={6}>
            {name}
            </Grid>
            <Grid item xs={6}>
            {dots}
            </Grid>
        </Grid>
    )
}

function InfoOverviewContainer(props) {
    console.log('InfoOverviewContainer')
    console.log(props)
    const classes = useStyles()
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography color="textSecondary" variant="h4">
                        PROFILE
                    </Typography>
                    <Typography color="textPrimary" variant="body1">
                        Over 12 years of experience as a
                        software engineer/analyst, both in
                        consultancy and in-house
                        development.
                        Constantly improving my software
                        development skills and keeping up
                        to date with the latest trends.
                        Always aiming for the highest
                        quality
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    
                </Grid>
                <Grid item xs={6}>
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
                        <Typography color="textPrimary" variant="body1" className={classes.contactTextStyle}>
                            linkedin.com/in/bart-vanraes1981
                        </Typography>
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
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6}>
                    <Typography color="textSecondary" variant="h4">
                        SKILLS
                    </Typography>
                    <Box className={classes.skillStyle}>
                        {showSkill('.NET (C#)', 4)}
                        {showSkill('HTML CSS', 4)}
                        {showSkill('Angular', 3)}
                        {showSkill('Vue', 3)}
                        {showSkill('SQL Server', 4)}
                        {showSkill('Amazon AWS', 2)}
                        
                        <Box hidden={!props.infoOverview.showMoreSkills}>
                            {showSkill('Node.js', 2)}
                            {showSkill('React', 1)}
                            {showSkill('Java', 1)}
                            {showSkill('Python', 1)}
                        </Box>                        
                    </Box>
                    <Button onClick={props.toggleSkills} className={classes.showMoreStyle}>{ props.infoOverview.showMoreSkills ? 'Show Less' : 'Show More'}</Button>
                    
                    
                    
                </Grid>
                <Grid item xs={6}>
                    
                </Grid>
            </Grid>

        </div>
    )
}

export default InfoOverviewContainer