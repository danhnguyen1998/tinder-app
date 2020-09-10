const TOKEN = '@@token';
const PASS_STARTED = '@@pass';
const ACCOUNT_MIN_DATE = '@@accountMinDate';

const RESPONSE_STATUS = {
  SUCESS: 200,
  NOT_FOUND: 404,
  INTERVAL_SERVER: 500,
  FORBIDDEN: 403,
};

const DATA_GOAL = [
  {
    id: 1,
    text: 'Burn Calories',
  },
  {
    id: 2,
    text: 'Run',
  },
  {
    id: 3,
    text: 'Biking',
  },
  {
    id: 4,
    text: 'Step',
  },
  {
    id: 5,
    text: 'Check into a location',
  },
];

const DATA_DATE = [
  {
    id: 'DAYS',
    text: 'Days',
  },
  {
    id: 'WEEKS',
    text: 'Weeks',
  },
  {
    id: 'MONTHS',
    text: 'Months',
  },
  {
    id: 'YEARS',
    text: 'Years',
  },
];

enum STAKE {
  STAKE_TO_APP = 'STAKE_TO_APP',
  STAKE_TO_FRIEND = 'STAKE_TO_FRIEND',
}

enum STATUS {
  IN_ACTIVE = 'IN_ACTIVE',
  ACTIVE = 'ACTIVE',
  BLOCK = 'BLOCK',
  DELETE = 'DELETE',
}

enum GOAL {
  BURN_CALORIES = 1,
  RUNNING = 2,
  BIKING = 3,
  STEP = 4,
  CHOOSE_LOCATION = 5,
}

enum COMMITMENT_TYPE {
  STANDARD = 'STANDARD',
  DAILY_WEEKLY = 'DAILY_WEEKLY',
}

const PAGE_SIZE = 5;
const STEP = 5;

export default {
  TOKEN,
  RESPONSE_STATUS,
  DATA_GOAL,
  DATA_DATE,
  STAKE,
  STATUS,
  GOAL,
  PAGE_SIZE,
  COMMITMENT_TYPE,
  STEP,
  PASS_STARTED,
  ACCOUNT_MIN_DATE,
};
