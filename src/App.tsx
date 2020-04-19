import React from 'react';
import 'survey-react/survey.css';
import './App.css';
import { SurveyPanel } from './components/SurveyPanel/SurveyPanel';

function App() {
  function resetHeight() {
    // reset the body height to that of the inner browser
    document.body.style.height = window.innerHeight + 'px';
  }
  // reset the height whenever the window's resized
  window.addEventListener('resize', resetHeight);
  // called to initially set the height.
  resetHeight();

  return (
    <div className="App">
      <SurveyPanel></SurveyPanel>
    </div>
  );
}

export default App;
