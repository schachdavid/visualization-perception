import React, { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
} from 'recharts';
import { ReactSurveyModel, StylesManager, Survey } from 'survey-react';
import 'survey-react/survey.css';
import { chartData } from '../../chartData';
import { getSurveyData } from '../../surveyData';
import { CompletedPage } from '../CompletedPage/CompletedPage';
import styles from './SurveyPanel.module.css';

export const SurveyPanel: React.FC = () => {
  const [survey, setSurvey] = useState(new ReactSurveyModel(getSurveyData()));
  const [displayChart, setDisplayChart] = useState(true);
  const [currentChartNo, setCurrentChartNo] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const numberOfCharts = chartData.length;

  useEffect(() => {
    StylesManager.applyTheme('winter');
    return () => {};
  }, []);

  const handleNext = () => {
    if (survey.currentPageNo >= numberOfCharts - 1) {
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

  const note = chartData[currentChartNo]?.note ? (
    <div className={styles.chartNote}> {chartData[currentChartNo].note}</div>
  ) : (
    <div className={styles.chartNote}></div>
  );

  const page = isCompleted ? (
    <CompletedPage data={survey.data}></CompletedPage>
  ) : displayChart ? (
    <>
      <h1 className={styles.chartTitle}>{chartData[currentChartNo].name}</h1>
      <ResponsiveContainer className={styles.chartContainer} width={300}>
        <BarChart
          data={chartData[currentChartNo].data}
          barSize={70}
          barCategoryGap={0}
        >
          <XAxis dataKey="none" tickLine={false} tickSize={0}></XAxis>
          <Bar dataKey="value">
            <Cell fill="#8884d8" />
            <Cell fill="#00C49F" />
            <LabelList dataKey="name" position="bottom" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className={styles.footLine}>
        {note}
        <input
          className={styles.nextButton}
          type="submit"
          value="Weiter"
          onClick={handleNext}
        />
      </div>
    </>
  ) : (
    <>
      <Survey model={survey} />
      <input
        className={styles.nextButton}
        type="submit"
        value="Weiter"
        onClick={handleNext}
      />
    </>
  );

  return <div className={styles.container}>{page}</div>;
};
