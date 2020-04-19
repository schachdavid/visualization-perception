export const chartData = [
  {
    name:
      'Anteil der 30 bis 35 Jährigen ohne beruflichen Bildungsabschluss (Studium, Ausbildung etc.)',
    question:
      'Um wie viel mal ist der Anteil bei Personen mit Migrationshintergrund größer? (Kommazahl möglich)',
    expectedAnswer: 3.2,
    data: [
      { name: 'Mit Migrationshintergrund', value: 32 },
      { name: 'Ohne Migrationshintergrund', value: 10 },
    ],
  },
  {
    name: 'Anteil der Schüler in Privatschulen',
    question:
      'Wie groß ist der Anteil der Schüler auf Privatschulen in Prozent?',
    expectedAnswer: 9,
    data: [
      { name: 'Schüler in öffentlichen Schulen', value: 81 },
      { name: 'Schüler auf Privatschulen', value: 9 },
    ],
  },

  {
    name: 'Durchschnittslohn nach Bundesländern',
    question:
      'Wie viel geringer ist der Lohn in Mecklenburg-Vorpommern in Prozent?',
    expectedAnswer: 0.1968,
    data: [
      { name: 'Berlin', value: 42525 },
      { name: 'Mecklenburg-Vorpommern', value: 34155 },
    ],
  },
  {
    name:
      'Anteil der Menschen die den Begriff Blockchain kennen in Deutschland',
    question:
      'Wie groß ist der Anteil der Menschen die den Begriff kennen in Prozent?',
    expectedAnswer: 14,
    data: [
      { name: 'nicht bekannt', value: 86 },
      { name: 'bekannt', value: 14 },
    ],
  },
  {
    name: 'Treibhausgase in g/Pkm nach Verkehrsmittel',
    question:
      'Um wie viel prozent geringer ist der Ausstoß von Treibhausgasen in Fernlinienbussen als in Zügen?',
    expectedAnswer: 10,
    data: [
      { name: 'Eisenbahn, Fernverkehr', value: 32 },
      { name: 'Fernlinienbus', value: 29 },
    ],
  },
  {
    name: 'CO² Ausstoß',
    question:
      'Um wie viel mal ist der CO² Ausstoß größer bei einer Flugreise nach Südostasien als durch das tägliche pendeln mit dem Auto?',
    expectedAnswer: 6.069,
    data: [
      { name: 'Berufspendler Auto pro Jahr*', value: 0.87 },
      { name: 'Flugreise nach Südostasien', value: 5.28 },
    ],
    note:
      '*20km Strecke pro Arbeitstag bei einem Dieselverbauch von 6.1l/100km',
  },
];
