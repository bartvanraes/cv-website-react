import React from 'react';
import {WorkExperienceProvider} from './context/WorkExperienceContext'
import {SkillProvider} from './context/SkillContext'
import Overview from './components/OverviewComponent'
import './App.css';
import { TabProvider } from 'context/TabContext'
import { InfoOverviewProvider } from 'context/InfoOverviewContext'
import cvTheme from 'themes/cvTheme'
import { ThemeProvider } from '@material-ui/core/styles'


function App() {
  return (
    <ThemeProvider theme={cvTheme}>
      <WorkExperienceProvider>
        <SkillProvider>
          <TabProvider>
            <InfoOverviewProvider>
              <Overview></Overview>
            </InfoOverviewProvider>
          </TabProvider>
        </SkillProvider>
      </WorkExperienceProvider>
    </ThemeProvider>
  );
}

export default App;
