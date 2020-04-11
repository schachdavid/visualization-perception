export const surveyData = {
  showProgressBar: 'top',
  locale: 'de',
  showNavigationButtons: false,
  pages: [
    {
      questions: [
        {
          name: 'Raucher',
          type: 'text',
          title:
            'Wie viel geringer ist die Lebenserwartung von Rauchern in Prozent?',
          placeHolder: '',
          isRequired: true,
        },
      ],
    },
    {
      questions: [
        {
          name: 'Raucher2',
          type: 'text',
          title:
            'Wie viel geringer ist die Lebenserwartung von Rauchern in Prozent?',
          placeHolder: '',
          isRequired: true,
        },
      ],
    },
    {
      questions: [
        {
          type: 'radiogroup',
          name: 'price to competitors',
          title: 'Hast du Kinder?',
          choices: ['Ja', 'Nein'],
        },
      ],
    },
    {
      questions: [
        {
          type: 'radiogroup',
          name: 'price to competitors',
          title: 'Bist du Student oder Professor?',
          choices: ['Student', 'Professor'],
        },
      ],
    },
    {
      questions: [
        {
          type: 'radiogroup',
          name: 'price to competitors',
          title: 'Hast du Kinder?',
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
          name: 'Ökonomie',
          title: 'Ökonomie',
          mininumRateDescription: 'sehr schlecht',
          maximumRateDescription: 'sehr gut',
        },
        {
          type: 'rating',
          name: 'Ökologie',
          title: 'Ökologie',
          mininumRateDescription: 'sehr schlecht',
          maximumRateDescription: 'sehr gut',
        },
      ],
    },
  ],
};
