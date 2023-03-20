import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TabPanel from './TabPanel'
import Paper from '@mui/material/Paper'
import SkillOverview from './skills/SkillOverviewComponent'
import InfoOverview from './info/InfoOverviewComponent'
import FAQOverview from './faq/FAQOverviewComponent'
import WorkExperienceOverview from './workExperiences/WorkExperienceOverviewComponent'
import { Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import theme from '@/themes/cvTheme'


function OverviewContainer(props) {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                background: theme.palette.background.default
            }}>
                <Paper position="static">
                    <Paper evelvation={0}>
                        <Typography variant="h3" align='center' color="textSecondary" sx={{
                            paddingBottom: theme.spacing(2),
                            paddingTop: theme.spacing(1)
                        }}>
                            BART VANRAES
                        </Typography>
                        <Typography variant="h5" align='center' color="textPrimary" sx={{
                            paddingBottom: theme.spacing(2),
                            paddingTop: theme.spacing(1)
                        }}>
                            Full-stack Developer
                        </Typography>
                    </Paper>
                    <Tabs value={props.tab.selectedTab} onChange={props.tabsHandleChange}>
                        <Tab label="Overview" sx={{
                            paddingLeft: theme.spacing(4),
                            paddingRight: theme.spacing(4),
                            color: theme.palette.primary.main
                        }}></Tab>
                        <Tab label="Experience" sx={{
                            paddingLeft: theme.spacing(4),
                            paddingRight: theme.spacing(4),
                            color: theme.palette.primary.main
                        }}></Tab>
                        <Tab label="Skills" sx={{
                            paddingLeft: theme.spacing(4),
                            paddingRight: theme.spacing(4),
                            color: theme.palette.primary.main
                        }}></Tab>
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
        </ThemeProvider>
    )
}

export default OverviewContainer