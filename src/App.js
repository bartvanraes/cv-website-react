import React from 'react';
import {WorkExperienceProvider} from './context/WorkExperienceContext'
import {SkillProvider} from './context/SkillContext'
import Overview from './components/OverviewComponent'
import './App.css';
import { TabProvider } from 'context/TabContext';

function App() {
  return (
    <WorkExperienceProvider>
      <SkillProvider>
        <TabProvider>
          <Overview></Overview>
        </TabProvider>
      </SkillProvider>
    </WorkExperienceProvider>
  );
}

export default App;
