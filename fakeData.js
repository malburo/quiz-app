export const QUESTIONS_DATA = [
  {
    id: 'id1',
    question: {
      title: 'title',
      code: {
        language: 'js',
        content: [
          'function a(x) {',
          '  x++;',
          '  return function () {',
          '    console.log(++x);',
          '  };',
          '}',
          '',
          'a(1)();',
          'a(1)();',
          'a(1)();',
        ],
      },
    },
    answers: {
      A: '1, 2, 3 and 1, 2, 3',
      B: '3, 3, 3 and 3, 4, 5',
      C: '3, 3, 3 and 1, 2, 3',
      D: '1, 2, 3 and 3, 3, 3',
    },
  },
];
