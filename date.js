import moment from 'moment';

const dayAfterTomorrow = moment().add(2, 'days');
console.log(dayAfterTomorrow.format('YYYY-MM-DD'));
