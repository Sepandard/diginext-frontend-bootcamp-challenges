/**
 * Try the challenge with the Object.groupBy method
 *
 * @param {array} workingHours An array of working hours in the format provided at the end of file.
 *
 * @returns object with the comment format inside the function.
 */

const map = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7,
};

function workingHoursProxy(workingHours) {
    return arr
      .sort((a, b) => {
        return map[a.day_of_week] - map[b.day_of_week];
      })
      .reduce((prev, curr) => {
        return {
          ...prev,
          [curr.day_of_week]: prev[curr.day_of_week]
            ? [
                ...prev[curr.day_of_week],
                `${curr.start_time} - ${curr.end_time}`,
              ]
            : [`${curr.start_time} - ${curr.end_time}`],
        };
      }, {});
}

// const workingHours = [
//     {
//       day_of_week: "Saturday",
//       start_time: "9:00",
//       end_time: "14:00",
//     },
//     {
//       day_of_week: "Friday",
//       start_time: "9:00",
//       end_time: "16:00",
//     },
//     {
//       day_of_week: "Saturday",
//       start_time: "16:00",
//       end_time: "22:00",
//     },
//     {
//       day_of_week: "Sunday",
//       start_time: "9:00",
//       end_time: "22:00",
//     },
//    ];
