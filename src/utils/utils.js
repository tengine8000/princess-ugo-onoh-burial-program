export const getTimeRemaining = (futureDate) => {
  if (!(futureDate instanceof Date)) {
    throw new Error("not a valid Date object!");
  }
  const oneDay = 60 * 60 * 24 * 1;
  const oneHour = 60 * 60 * 1;
  const oneMinute = 60;
  const currentDate = new Date();
  const timeDiffInSecs = (futureDate.getTime() - currentDate.getTime()) / 1000;
  let daysToGo = parseInt(timeDiffInSecs / oneDay);
  let timeLeft = timeDiffInSecs % oneDay;
  let hoursToGo = parseInt(timeLeft / oneHour);
  timeLeft = timeLeft % oneHour;
  let minsToGo = parseInt(timeLeft / oneMinute);
  timeLeft = parseInt(timeLeft % oneMinute);
  let secsToGo = timeLeft;

  return {
    daysToGo,
    hoursToGo,
    minsToGo,
    secsToGo,
  };
};
