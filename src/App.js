import React from 'react';
import {WorkExperienceProvider} from './context/WorkExperienceContext'
import {SkillProvider} from './context/SkillContext'
import Overview from './components/OverviewComponent'
import './App.css';
import { TabProvider } from 'context/TabContext';
import { InfoOverviewProvider } from 'context/InfoOverviewContext';

function App() {
  return (
    <WorkExperienceProvider>
      <SkillProvider>
        <TabProvider>
          <InfoOverviewProvider>
            <Overview></Overview>
          </InfoOverviewProvider>
        </TabProvider>
      </SkillProvider>
    </WorkExperienceProvider>
  );
}

export default App;
