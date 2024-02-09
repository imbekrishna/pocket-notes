import { groups, notes } from './data';

/* data rendering helpers */
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

/* Data fetching helpers */

/* For groups */
export const getGroups = () => groups;
export const getGroupById = (groupId) => {
  return groups.find((group) => group.id === parseInt(groupId));
};

/* For notes */
export const getNotes = () => notes;
export const getNoteById = (noteId) => {
  return notes.find((note) => note.id === parseInt(noteId));
};
