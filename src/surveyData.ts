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
            name: 'berlinMiete',
            title: 'Wohnst du in Berlin in einer Mietwohnung?',
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
      {
        questions: [
          {
            type: 'radiogroup',
            name: 'zugvsbus',
            title:
              'Hast du erwartet, dass Fernbusse weniger Treibhausgase produzieren als Züge?',
            choices: ['Ja', 'Nein'],
          },
        ],
      },
      {
        questions: [
          {
            type: 'radiogroup',
            name: 'flugvsauto',
            title:
              'Hast du erwartet, dass interkontinentale Flugreisen viel mehr CO2 produzieren als das tägliche Pendeln mit dem Auto?',
            choices: ['Ja', 'Nein'],
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
          placeHolder: chart.answerPlaceHolder,
          isRequired: true,
        },
      ],
    };
  });
  data.pages.unshift(...newPages);

  return data;
};
