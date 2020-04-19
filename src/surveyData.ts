import { chartData } from './chartData';

export const getSurveyData = () => {
  let data: any = {
    showProgressBar: 'top',
    locale: 'de',
    showNavigationButtons: false,
    pages: [
      {
        questions: [
          {
            type: 'radiogroup',
            name: 'migrationshintergrund',
            title: 'Hast du einen Migrationshintergrund?',
            choices: ['Ja', 'Nein'],
          },
        ],
      },
      {
        questions: [
          {
            type: 'radiogroup',
            name: 'privatschule',
            title: 'Haben du oder deine Kinder eine Privatschule besucht?',
            choices: ['Ja', 'Nein'],
          },
        ],
      },
      {
        title:
          'Wie gut würdest du deine Kenntnisse in folgenden Themengebieten einschätzen?',

        questions: [
          {
            type: 'rating',
            name: 'Wirtschaft',
            title: 'Wirtschaft',
            mininumRateDescription: 'sehr schlecht',
            maximumRateDescription: 'sehr gut',
          },
          {
            type: 'rating',
            name: 'IT',
            title: 'IT',
            mininumRateDescription: 'sehr schlecht',
            maximumRateDescription: 'sehr gut',
          },
        ],
      },
    ],
  };

  //add questions for charts
  const newPages = chartData.map((chart) => {
    return {
      questions: [
        {
          name: chart.name,
          type: 'text',
          inputType: 'number',
          title: chart.question,
          placeHolder: '',
          isRequired: true,
        },
      ],
    };
  });
  data.pages.unshift(...newPages);

  return data;
};
