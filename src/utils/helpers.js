export const getGroupInitials = (name) => {
  const wordsArray = name.split(' ');
  const initals =
    wordsArray.length === 1
      ? wordsArray[0][0]
      : wordsArray[0][0] + wordsArray[1][0];

  return initals.toUpperCase();
};
