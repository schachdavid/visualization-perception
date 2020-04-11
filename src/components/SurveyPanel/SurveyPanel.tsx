import React, { useEffect, useState } from 'react';
import { ReactSurveyModel, StylesManager } from 'survey-react';
import 'survey-react/survey.css';
import { surveyData } from '../../surveyData';
import { CodeBox } from '../CodeBox/CodeBox';
import { ShareButtons } from '../ShareButtons/ShareButtons';
import styles from './SurveyPanel.module.css';

const chartData = [
  [
    { name: 'Lebenserwartung Raucher', value: 76 },
    { name: 'Lebenserwartung Nichtraucher', value: 68 },
  ],
  [
    { name: 'Lebenserwartung Raucher', value: 76 },
    { name: 'Lebenserwartung Nichtraucher', value: 68 },
  ],
];

const obj = {
  Quality: { 'does what it claims': '1' },
  satisfaction: 5,
  'recommend friends': 5,
  suggestions: 'sef',
  pricelimit: { mostamount: 'sef', leastamount: 'sef' },
  email: 'sefsef',
};

export const SurveyPanel: React.FC = () => {
  const [survey, setSurvey] = useState(new ReactSurveyModel(surveyData));
  const [displayChart, setDisplayChart] = useState(true);
  const [currentChartNo, setCurrentChartNo] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    StylesManager.applyTheme('winter');
    return () => {};
  }, []);

  const handleNext = () => {
    if (survey.currentPageNo >= 1) {
      if (survey.isLastPage) setIsCompleted(true);
      else survey.nextPage();
    } else if (
      !displayChart &&
      currentChartNo !== survey.currentPageNo &&
      !survey.isCurrentPageHasErrors
    ) {
      setDisplayChart(true);
    } else if (displayChart) {
      setDisplayChart(false);
      setCurrentChartNo(currentChartNo + 1);
      if (currentChartNo !== 0) survey.nextPage();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.completedPage}>
        <h1>Vielen Dank für deine Hilfe!</h1>
        <div>
          <div>
            Domäne: <span className={styles.xValue}>1.3</span>
          </div>
          <div>
            Erwartungskonformität: <span className={styles.xValue}>1.4</span>
          </div>
          <div>
            Betroffenheit: <span className={styles.xValue}>1.2</span>
          </div>
        </div>
        <div className={styles.answersContainer}>
          <div className={styles.answers}>Deine Antworten</div>
          <div className={styles.codeBox}>
            <CodeBox code={JSON.stringify(obj, null, 4)}></CodeBox>
          </div>
        </div>

        <div className={styles.shareContainer}>
          <div className={styles.sharePlease}>
            Teile deine Antworten mit mir damit ich sie auswerten kann:
          </div>
          <ShareButtons></ShareButtons>
        </div>
      </div>

      {/* {displayChart && !isCompleted ? (
        <PieChart width={450} height={300} className={styles.chart}>
          <Legend verticalAlign="top" />
          <Pie
            data={chartData[currentChartNo]}
            labelLine={false}
            outerRadius={100}
            dataKey="value"
          >
            <Cell fill="#8884d8" />
            <Cell fill="#0088FE" />
            <Cell fill="#00C49F" />
            <Cell fill="#FF8042" />
          </Pie>
        </PieChart>
      ) : (
        <Survey model={survey} />
      )}
      {!isCompleted ? (
        <input
          className={styles.nextButton}
          type="button"
          value="Weiter"
          onClick={handleNext}
        />
      ) : (
        <CodePanel code={JSON.stringify(obj, null, 4)}></CodePanel>
      )} */}
    </div>
  );
};
