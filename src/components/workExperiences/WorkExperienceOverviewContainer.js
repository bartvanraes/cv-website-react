import React from 'react'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import WorkExperienceItem from './WorkExperienceItemComponent'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/themes/cvTheme'

const showWorkExperiences = (workExperiences) => {
    return workExperiences.map((work) => <Grid item xs={12} key={work.startDate}><WorkExperienceItem key={work.startDate} item={work}></WorkExperienceItem></Grid>)
}

function WorkExperienceOverviewContainer(props) {
    return (
        <ThemeProvider theme={theme}>
            <div>            
                <Grid container spacing={3}> 
                    <Grid item xs={12}>
                        <Paper elevation={3} >
                            <FormGroup row>
                                <FormControl sx={{
                                    marginBottom: theme.spacing(2),
                                    marginLeft: theme.spacing(3),
                                    marginRight: theme.spacing(2)
                                }}>
                                    <TextField 
                                        label="Search" 
                                        value={props.workExperiences.filter.search}
                                        onKeyDown={props.confirmTextSearch}
                                        onChange={props.changeFilter}
                                        name="search"
                                        variant="standard"
                                    />
                                </FormControl>
                                
                                <FormControlLabel sx={{
                                        marginLeft: theme.spacing(2)
                                    }} 
                                    control={
                                        <Switch 
                                            checked={props.workExperiences.filter.temporaryOnly} 
                                            onChange={props.changeFilter} 
                                            name="temporaryOnly"
                                            color="primary" />}
                                            label="Temporary jobs only"
                                />
                                <FormControlLabel sx={{
                                        marginLeft: theme.spacing(2)
                                    }}
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
                                <FormControlLabel sx={{
                                        marginLeft: theme.spacing(2)
                                    }}
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
                                <Button color="secondary" sx={{
                                        marginLeft: theme.spacing(2)
                                    }} 
                                    onClick={props.resetFilter}>Reset</Button>                   
                            </FormGroup>
                        </Paper>    
                    </Grid>
                    
                    {showWorkExperiences(props.workExperiences.displayedWorkExperiences)}           
                </Grid>
            </div>
        </ThemeProvider>
    )
}

export default WorkExperienceOverviewContainer