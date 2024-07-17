import React from 'react';
import {WorkExperienceProvider} from '../context/WorkExperienceContext'
import {SkillProvider} from '../context/SkillContext'
import Overview from '../components/OverviewComponent'
//import styles from './styles.modules.css';
import { TabProvider } from '../context/TabContext'
import { InfoOverviewProvider } from '../context/InfoOverviewContext'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/themes/cvTheme'


function App() {
  return (
    <ThemeProvider theme={theme}>
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

