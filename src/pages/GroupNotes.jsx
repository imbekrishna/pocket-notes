import { Link } from 'react-router-dom';

import arrowBack from '../assets/arrow-back.svg';
import sendIcon from '../assets/send.svg';
import GroupLogo from '../components/GroupLogo';
import NoteCard from '../components/NoteCard';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  addNoteToGroup,
  getGroupById,
  getNotesByGroupId,
} from '../utils/helpers';

const GroupNotes = () => {
  const params = useParams();
  const group = getGroupById(params.id);

  const allNotes = getNotesByGroupId(params.id);

  const [newNote, setNewNote] = useState('');
  const isDisabled = newNote.length <= 0;

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const saveNote = () => {
    if (newNote.length <= 0) return;

    addNoteToGroup(params.id, newNote);
    setNewNote('');
  };

  return (
    <section className="notes__container">
      <header className="notes__header">
        <Link to={'..'} className="back__btn show-on-mobile-only">
          <img role="button" src={arrowBack} />
        </Link>
        <div className="grp__item__link">
          <GroupLogo color={group?.color} name={group?.name} />
          <span className="grp__name">{group?.name}</span>
        </div>
      </header>
      <ul className="notes__list">
        {allNotes.map((note) => (
          <NoteCard key={note.id} groupId={group.id} {...note} />
        ))}
      </ul>
      <footer className="note__editor">
        <textarea
          name="note"
          id="note"
          placeholder="Enter your text here..."
          value={newNote}
          onChange={handleChange}
        />
        <button
          onClick={saveNote}
          className="note__add__btn"
          disabled={isDisabled}
          aria-label="Add Note"
        >
          <img src={sendIcon} width="25" height="25" alt='' />
        </button>
      </footer>
    </section>
  );
};

export default GroupNotes;
