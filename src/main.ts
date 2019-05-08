import * as lux from "luxon";

const dtlocale = lux.DateTime.local();
const plus1h = dtlocale.plus({ hour: 1 });
const plus30h = dtlocale.plus({ hours: 30 });
const time1 = lux.Interval.fromDateTimes(dtlocale, plus1h);
const time30 = lux.Interval.fromDateTimes(dtlocale, plus30h);
const time2 = lux.Duration.fromObject({ hour: 2 });

console.log("dtlocale.valueOf(): " + dtlocale.valueOf());
console.log("Setting.locale      " + lux.Settings.defaultLocale);
console.log("Settings.zoneName   " + lux.Settings.defaultZoneName);
console.log("interval.time1      " + time1.length("millisecond"));
console.log("time1.length(ms)    " + time1.length("second"));
console.log(".time30h.leng(s)    " + time30.length("second"));
console.log("duration.time2      " + time2.valueOf());
console.log(".time2.lengh()      " + time2.as("millisecond"));
console.log("durationFromM       " + lux.Duration.fromMillis(time2.valueOf()));
console.log(
  "create.dateti       " + lux.DateTime.fromMillis(dtlocale.valueOf())
);

// console.log("local" + lux.DateTime.local());
