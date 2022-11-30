import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import TabPanel from './TabPanel'
import Paper from '@material-ui/core/Paper'
import SkillOverview from './skills/SkillOverviewComponent'
import InfoOverview from './info/InfoOverviewComponent'
import FAQOverview from './faq/FAQOverviewComponent'
import WorkExperienceOverview from './workExperiences/WorkExperienceOverviewComponent'
import { Typography, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
    headerStyle: {
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(1)
    },
    headerNameStyle: {
        paddingTop: theme.spacing(2)
    },
    backgroundStyle: {
        background: theme.palette.background.default
    }
}))



function OverviewContainer(props) {
    const classes = useStyles()
    const nameStyle = clsx(
        classes.headerStyle,
        classes.headerNameStyle
    )
    return (
        <Box className={classes.backgroundStyle}>
            <Paper position="static">
                <Paper evelvation={0}>
                    <Typography variant="h3" align='center' color="textSecondary" className={nameStyle}>
                        BART VANRAES
                    </Typography>
                    <Typography variant="h5" align='center' color="textPrimary" className={classes.headerStyle}>
                        Full-stack Developer
                    </Typography>
                </Paper>
                <Tabs value={props.tab.selectedTab} onChange={props.tabsHandleChange} aria-label="simple tabs example">
                    <Tab label="Overview"></Tab>
                    <Tab label="Experience"></Tab>
                    <Tab label="Skills"></Tab>
                </Tabs>
            </Paper>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TabPanel value={props.tab.selectedTab} index={0}>
                            <InfoOverview></InfoOverview>
                        </TabPanel>
                        <TabPanel value={props.tab.selectedTab} index={1}>
                            <WorkExperienceOverview></WorkExperienceOverview>
                        </TabPanel>
                        <TabPanel value={props.tab.selectedTab} index={2}>
                            <SkillOverview></SkillOverview>
                        </TabPanel>
                        <TabPanel value={props.tab.selectedTab} index={3}>
                            <FAQOverview></FAQOverview>
                        </TabPanel>
                                
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default OverviewContainer