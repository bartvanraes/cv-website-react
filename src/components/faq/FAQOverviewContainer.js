import React from 'react';
import Box from '@material-ui/core/Box'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    titleStyle: {
        marginBottom: theme.spacing(2)
    },
    subtitleStyle: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(2),
        whiteSpace: 'pre-line'
    },
    textStyle: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        whiteSpace: 'pre-line',
        fontStyle: 'italic'
    }
}))

function FAQOverviewContainer(props) {

    const classes = useStyles(props)    

    return (      

        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography color="textSecondary" variant="h4" className={classes.titleStyle}>
                General Information
            </Typography>
            <Typography variant="h5" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Current situation
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                Unemployed, looking for a job or project
            </Typography>
            <Typography variant="h5" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Status
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                Employee, but I'm considering to become a freelancer if the project is great
            </Typography>
            <Typography variant="h5" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Work schedule
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                4/5th, as in 4 days of 8 hours per week
            </Typography>
            <Typography variant="h5" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Day rate
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                600€, I'm not considering to become a freelancer for less.<br/>
                For a 4/5th employee contract, I am aiming around 4000€ bruto (after the indexation of january 2023), but it depends on the amount of extralegal benefits.
            </Typography>  
            <Typography variant="h5" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Minimum duration of a project
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                12 months but I could consider 6 month projects if it's really interesting
            </Typography>  
            <Typography variant="h5" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Location
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                Antwerp (city) or remote/hybrid
            </Typography> 
            <Typography variant="h5" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Type of project/job I'm looking for
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                Full-stack development with modern technologies in a professional environment with good project management.<br />
                Check the 'Skills' page to filter on the technologies I prefer to work with at the moment.<br />
                If the project is in Antwerp I can definitely work on site, otherwise remote.
            </Typography> 
            <br />
            <Typography color="textSecondary" variant="h4" className={classes.titleStyle}>
                FAQ
            </Typography>
            <Typography variant="h6" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Q: Why do you have so many different work experiences?
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                A: I often worked with temporary contracts or as a consultant via different consultancy agencies.<br/>
                Many jobs were with temporary contracts or even interim contracts (you can filter on those in the 'Experience' section).<br/>
                Currently there are only 2 jobs were I quit myself due to really poor project management and technology decisions I couldn't agree with.<br/>
                Other reasons why jobs ended: company restructuring, departments that closed down and even jobs where I got the wrong role or technology to work with.
            </Typography>      
            <Typography variant="h6" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Q: What were your favourite job experiences?
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                A: Twikit and Nobel Biocare, I can definitely recommend these employers.
            </Typography>     
            <Typography variant="h6" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Q: What do you value in an employer?
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                A: Open communication and that promises are kept.
            </Typography>    
            <Typography variant="h6" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Q: Favourite type of company?
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                A: I prefer larger companies because they tend to have better project management and code quality.<br/>
                Also I value diversity within a company.
            </Typography>   
            <Typography variant="h6" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Q: Do you drive a car?
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                A: No and I'm not planning to.
            </Typography> 
            <Typography variant="h6" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Q: Do you like working on legacy applications?
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                A: Absolutely not.
            </Typography>    
            <Typography variant="h6" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Q: Our project doesn't really match with what you're looking for, should we still contact you?
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                A: I'm always willing to study new technologies and then see if I like them or not.<br/>
                If it's about working full-time, accepting low budget projects, legacy technologies or commuting to difficult to reach locations: no.
            </Typography>   
            <Typography variant="h6" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Q: Why do you want to work part-time?
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                A: I feel much happier this way, just imagine having a mini weekend in the middle of the week.
            </Typography>             
            <Typography variant="h6" color="textPrimary" className={classes.subtitleStyle} gutterBottom>
                Q: We have your CV in our database, should we just send it to all of our clients?
            </Typography>
            <Typography variant="body1" className={classes.textStyle} gutterBottom>
                A: Never ever send my CV to a client without my explicit permission or your company will get blacklisted.<br/>
                It happened before that my CV ended up at an ex-employer without my knowledge months after I had contact with the recruitment agency.
            </Typography> 
        </Box>
    )
}

export default FAQOverviewContainer