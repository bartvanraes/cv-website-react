import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TabPanel from './TabPanel'
import SkillOverview from './skills/SkillOverviewComponent'

function showSkills(skills) {
    return skills.map((skill) => <li key={skill.name}>{skill.name}</li>)
}

function OverviewContainer(props) {
    return (
        <div>
            <AppBar position="static">
                <Tabs value={props.tab.selectedTab} onChange={props.tabsHandleChange} aria-label="simple tabs example">
                    <Tab label="Overview"></Tab>
                    <Tab label="Experience"></Tab>
                    <Tab label="Skills"></Tab>
                </Tabs>
            </AppBar>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TabPanel value={props.tab.selectedTab} index={0}>
                        </TabPanel>
                        <TabPanel value={props.tab.selectedTab} index={1}>
                        </TabPanel>
                        <TabPanel value={props.tab.selectedTab} index={2}>
                            <SkillOverview></SkillOverview>
                        </TabPanel>
                                
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default OverviewContainer