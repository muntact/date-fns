import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

function ordinalNumber(dirtyNumber) {
  const number = Number(dirtyNumber)
  return String(number).concat('.')
}

const eraValues = {
  narrow: ['pr. n. št.', 'po n. št.'],
  abbreviated: ['pr. n. št.', 'po n. št.'],
  wide: ['pred našim štetjem', 'po našem štetju']
}

const monthValues = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: [
    'jan.',
    'feb.',
    'mar.',
    'apr.',
    'maj',
    'jun.',
    'jul.',
    'avg.',
    'sep.',
    'okt.',
    'nov.',
    'dec.'
  ],
  wide: [
    'januar',
    'februar',
    'marec',
    'april',
    'maj',
    'junij',
    'julij',
    'avgust',
    'september',
    'oktober',
    'november',
    'december'
  ]
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1. čet.', '2. čet.', '3. čet.', '4. čet.'],
  wide: ['1. četrtletje', '2. četrtletje', '3. četrtletje', '4. četrtletje']
}

const dayValues = {
  narrow: ['n', 'p', 't', 's', 'č', 'p', 's'],
  short: ['ned.', 'pon.', 'tor.', 'sre.', 'čet.', 'pet.', 'sob.'],
  abbreviated: ['ned.', 'pon.', 'tor.', 'sre.', 'čet.', 'pet.', 'sob.'],
  wide: [
    'nedelja',
    'ponedeljek',
    'torek',
    'sreda',
    'četrtek',
    'petek',
    'sobota'
  ]
}

const dayPeriodValuesStandalone = {
  narrow: {
    am: 'd',
    pm: 'p',
    midnight: '24.00',
    noon: '12.00',
    morning: 'j',
    afternoon: 'p',
    evening: 'v',
    night: 'n'
  },
  abbreviated: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'poln.',
    noon: 'pold.',
    morning: 'jut.',
    afternoon: 'pop.',
    evening: 'več.',
    night: 'noč'
  },
  wide: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'polnoč',
    noon: 'poldne',
    morning: 'jutro',
    afternoon: 'popoldne',
    evening: 'večer',
    night: 'noč'
  }
}

const dayPeriodValuesFormatting = {
  narrow: {
    am: 'd',
    pm: 'p',
    midnight: '24.00',
    noon: '12.00',
    morning: 'zj',
    afternoon: 'p',
    evening: 'zv',
    night: 'po'
  },
  abbreviated: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'opoln.',
    noon: 'opold.',
    morning: 'zjut.',
    afternoon: 'pop.',
    evening: 'zveč.',
    night: 'ponoči'
  },
  wide: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'opolnoči',
    noon: 'opoldne',
    morning: 'zjutraj',
    afternoon: 'popoldan',
    evening: 'zvečer',
    night: 'ponoči'
  }
}

const localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function(quarter) {
      return Number(quarter) - 1
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValuesStandalone,
    defaultWidth: 'wide',
    formattingValues: dayPeriodValuesFormatting,
    defaultFormattingWidth: 'wide'
  })
}

export default localize
