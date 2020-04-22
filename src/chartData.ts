export enum answerType {
  percentage,
  multiples,
}

export const chartData = [
  {
    name: 'Beispieldiagramm: Lebenserwartung Raucher und nicht Raucher',
    question:
      'Beispielfrage: Um wie viel *Prozent* ist die Lebenserwartung geringer bei Rauchern?',
    expectedAnswer: 0,
    answerPlaceHolder: '99%',
    answerType: answerType.multiples,
    data: [
      { name: 'Nicht Raucher', value: 72 },
      { name: 'Raucher', value: 64 },
    ],
  },
  {
    name: 'Durchschnittliche Mietpreise',
    question: 'Um wie viel Prozent höher ist die Miete in Berlin?',
    expectedAnswer: 37.9,
    answerPlaceHolder: '99%',
    answerType: answerType.multiples,
    note: 'Stand 2020 für eine 60m² Wohnung',
    data: [
      { name: 'Berlin', value: 12.67 },
      { name: 'Deutschland', value: 9.19 },
    ],
  },
  {
    name: 'Anteil der Schüler in Privatschulen',
    question:
      'Wie groß ist der Anteil der Schüler auf Privatschulen in *Prozent*?',
    expectedAnswer: 9,
    answerPlaceHolder: '99%',
    data: [
      { name: 'Schüler in öffentlichen Schulen', value: 81 },
      { name: 'Schüler auf Privatschulen', value: 9 },
    ],
  },

  {
    name: 'Durchschnittslohn nach Bundesländern',
    question:
      'Wie viel geringer ist der Lohn in Mecklenburg-Vorpommern in *Prozent*?',
    expectedAnswer: 19.68,
    answerPlaceHolder: '99%',
    data: [
      { name: 'Berlin', value: 42525 },
      { name: 'Mecklenburg-Vorpommern', value: 34155 },
    ],
  },
  {
    name:
      'Anteil der Menschen, die den Begriff Blockchain kennen in Deutschland',
    question:
      'Wie groß ist der Anteil der Menschen, die den Begriff kennen in *Prozent*?',
    expectedAnswer: 14,
    answerPlaceHolder: '99%',
    data: [
      { name: 'nicht bekannt', value: 86 },
      { name: 'bekannt', value: 14 },
    ],
  },
  {
    name: 'Treibhausgase in g/Pkm nach Verkehrsmittel',
    question:
      'Um wie viel *Prozent* ist der Ausstoß von Treibhausgasen in Fernlinienbussen geringer als in Zügen?',
    expectedAnswer: 10,
    answerPlaceHolder: '99%',

    data: [
      { name: 'Eisenbahn, Fernverkehr', value: 32 },
      { name: 'Fernlinienbus', value: 29 },
    ],
  },
  {
    name: 'CO² Ausstoß',
    question:
      'Um das wie *Vielfache* ist der CO² Ausstoß bei einer Flugreise nach Südostasien größer als durch das tägliche Pendeln mit dem Auto?',
    expectedAnswer: 6.069,
    answerPlaceHolder: '10,5 mal',
    data: [
      { name: 'Berufspendler Auto pro Jahr*', value: 0.87 },
      { name: 'Flugreise nach Südostasien', value: 5.28 },
    ],
    note:
      '*20km Strecke pro Arbeitstag bei einem Dieselverbauch von 6.1l/100km',
  },
];
