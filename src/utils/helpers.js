import { nanoid } from 'nanoid';
import { LS_GROUP_KEY, LS_NOTES_KEY } from './constants';

/* data rendering helpers */
export const getGroupInitials = (name) => {
  if (name.length < 1) return '';

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
  })
    .format(new Date(timestamp))
    .replace(/-/gi, ' ');

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

const saveToStorage = (storage_key, value) => {
  localStorage.setItem(storage_key, JSON.stringify(value));
};

export const getGroups = () => {
  return storedGroups.sort((a, b) => b.createdAt - a.createdAt);
};
export const getGroupById = (groupId) => {
  return storedGroups.find((group) => group.id === groupId);
};

export const addGroup = (groupObj) => {
  // const group = { ...groupObj, id: nanoid(10), createdAt: Date.now() };

  // Creates id based on group name to prevent duplication of groups
  const groupId = groupObj.name.toLowerCase().replace(/\s/gi, '-');

  // Check if group with id exists
  const groupExists = storedGroups.find((grp) => grp.id === groupId);

  if (groupExists) {
    throw new Error(`${groupObj.name} already exists.`);
  }

  const group = { ...groupObj, id: groupId, createdAt: Date.now() };

  storedGroups.push(group);

  saveToStorage(LS_GROUP_KEY, storedGroups);
};

export const deleteGroupById = (groupId) => {
  const groupIndex = storedGroups.findIndex((group) => group.id === groupId);
  if (groupIndex < 0) {
    return;
  }

  storedGroups.splice(groupIndex, 1);
  saveToStorage(LS_GROUP_KEY, storedGroups);
};

/* For notes */
export const getNotes = () => storedNotes;

export const getNotesByGroupId = (groupId) => {
  return storedNotes[groupId]?.sort((a, b) => b.createdAt - a.createdAt) ?? [];
};

export const getNoteById = (noteId) => {
  return storedNotes.find((note) => note.id === noteId);
};

export const addNoteToGroup = (groupId, note) => {
  const noteObj = { id: nanoid(10), note, createdAt: Date.now() };
  if (Object.prototype.hasOwnProperty.call(storedNotes, groupId)) {
    storedNotes[groupId].push(noteObj);
  } else {
    storedNotes[groupId] = [noteObj];
  }

  saveToStorage(LS_NOTES_KEY, storedNotes);
};

export const deleteNoteFromGroup = (groupId, noteId) => {
  const groupExists = Object.prototype.hasOwnProperty.call(
    storedNotes,
    groupId
  );

  if (!groupExists) return;

  const notesGroup = storedNotes[groupId];
  const noteIndex = notesGroup.findIndex((note) => note.id === noteId);

  if (noteIndex < 0) return;

  notesGroup.splice(noteIndex, 1);

  saveToStorage(LS_NOTES_KEY, storedNotes);
};
