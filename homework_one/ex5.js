const seconds_in_minutes = 60;
const minutes_in_hour = 60;
const hours_in_day = 24;
const days_in_week = 7;

const seconds_in_day = seconds_in_minutes * minutes_in_hour * hours_in_day;
const seconds_in_week = seconds_in_day * days_in_week;

console.log(`there are ${seconds_in_day} seconds in a day`);
console.log(`there are ${seconds_in_week} seconds in a week`);
