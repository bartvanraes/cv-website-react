import React from 'react';
import {WorkExperienceProvider} from './context/WorkExperienceContext'
import {SkillProvider} from './context/SkillContext'
import Overview from './components/OverviewComponent'
import './App.css';

function App() {
  return (
    <WorkExperienceProvider>
      <SkillProvider>
        <Overview></Overview>
      </SkillProvider>
    </WorkExperienceProvider>
  );
}

export default App;
