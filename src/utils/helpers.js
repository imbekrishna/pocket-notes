import { nanoid } from 'nanoid';
import { LS_GROUP_KEY, LS_NOTES_KEY } from './constants';
/* data rendering helpers */
export const getGroupInitials = (name) => {
  const wordsArray = name.trim().split(' ');
  const initials =
    wordsArray.length === 1
      ? wordsArray[0][0]
      : wordsArray[0][0] + wordsArray[1][0];

  return initials.toUpperCase();
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
const storedGroups = JSON.parse(localStorage.getItem(LS_GROUP_KEY)) ?? [];
const storedNotes = JSON.parse(localStorage.getItem(LS_NOTES_KEY)) ?? {};

export const getGroups = () => {
  return storedGroups;
};
export const getGroupById = (groupId) => {
  return storedGroups.find((group) => group.id === groupId);
};

export const addGroup = (groupObj) => {
  const group = { ...groupObj, id: nanoid(10), createdAt: Date.now() };
  storedGroups.push(group);

  localStorage.setItem(LS_GROUP_KEY, JSON.stringify(storedGroups));
};

/* For notes */
export const getNotes = () => storedNotes;
export const getNotesByGroupId = (groupId) => {
  return storedNotes[groupId]?.sort((a, b) => b.createdAt - a.createdAt) ?? [];
};
// TODO: Implement
// export const getNoteById = (noteId) => {
//   return notes.find((note) => note.id === noteId);
// };

export const addNoteToGroup = (groupId, note) => {
  const noteObj = { id: nanoid(10), note, createdAt: Date.now() };
  if (Object.prototype.hasOwnProperty.call(storedNotes, groupId)) {
    storedNotes[groupId].push(noteObj);
  } else {
    storedNotes[groupId] = [noteObj];
  }
  // storedNotes[groupId].push(note);
  localStorage.setItem(LS_NOTES_KEY, JSON.stringify(storedNotes));
};
