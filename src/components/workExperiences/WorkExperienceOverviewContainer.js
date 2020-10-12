import React from 'react'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import WorkExperienceItem from './WorkExperienceItemComponent'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    filterStyle: {
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(2)
    },
    filterSwitchStyle: {
        marginLeft: theme.spacing(2)
    },
    resetStyle: {
        marginLeft: theme.spacing(2)
    },
    containerStyle: {
        minHeight: 705
    }
}))

const showWorkExperiences = (workExperiences) => {
    return workExperiences.map((work) => <Grid item xs={12} key={work.startDate}><WorkExperienceItem key={work.startDate} item={work}></WorkExperienceItem></Grid>)
}

function WorkExperienceOverviewContainer(props) {
    const classes = useStyles()
    return (
        <div>            
            <Grid container spacing={3} className={classes.containerStyle}> 
                <Grid item xs={12}>
                    <Paper elevation={3} >
                        <FormGroup row>
                            <FormControl className={classes.filterStyle}>
                                <TextField 
                                    label="Search" 
                                    value={props.workExperiences.filter.search}
                                    onKeyDown={props.confirmTextSearch}
                                    onChange={props.changeFilter}
                                    name="search"
                                />
                            </FormControl>
                            
                            <FormControlLabel className={classes.filterSwitchStyle}
                                control={
                                    <Switch 
                                        checked={props.workExperiences.filter.temporaryOnly} 
                                        onChange={props.changeFilter} 
                                        name="temporaryOnly"
                                        color="primary" />}
                                        label="Temporary jobs only"
                            />
                            <FormControlLabel className={classes.filterSwitchStyle}
                                control={
                                <Switch
                                    checked={props.workExperiences.filter.consultancyOnly}
                                    onChange={props.changeFilter}
                                    name="consultancyOnly"
                                    color="primary"
                                />
                                }
                                label="Consultancy jobs only"
                            />
                            <FormControlLabel className={classes.filterSwitchStyle}
                                control={
                                <Switch
                                    checked={props.workExperiences.filter.quitOnly}
                                    onChange={props.changeFilter}
                                    name="quitOnly"
                                    color="primary"
                                />
                                }
                                label="Only jobs where I resigned"
                            />
                            <Button color="secondary" className={classes.resetStyle} onClick={props.resetFilter}>Reset</Button>                   
                        </FormGroup>
                    </Paper>    
                </Grid>
                
                {showWorkExperiences(props.workExperiences.displayedWorkExperiences)}           
            </Grid>
        </div>
    )
}

export default WorkExperienceOverviewContainer