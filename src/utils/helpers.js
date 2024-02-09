export const getGroupInitials = (name) => {
  const wordsArray = name.split(' ');
  const initals =
    wordsArray.length === 1
      ? wordsArray[0][0]
      : wordsArray[0][0] + wordsArray[1][0];

  return initals.toUpperCase();
};

export const dateTimeFormatter = (timestamp) => {
  const date = new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(timestamp));

  const time = new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(timestamp));

  return { date, time };
};
