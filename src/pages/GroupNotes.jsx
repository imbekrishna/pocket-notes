import { Link } from 'react-router-dom';
import sendIcon from '../assets/send.svg';
import arrowBack from '../assets/arrow-back.svg';
import GroupLogo from '../components/GroupLogo';
import NoteCard from '../components/NoteCard';
import { notes } from '../utils/data';

const GroupNotes = () => {
  return (
    <section className="notes__container">
      <header className="notes__header">
        <img
          role="button"
          src={arrowBack}
          className="back-btn"
          height="20"
          width="20"
        />
        <Link to={`/group/${1}`} className="grp__item__link">
          <GroupLogo name={'My Group'} />
          <span className="grp__name">{'My Group'}</span>
        </Link>
      </header>
      <ul className="notes__list">
        {notes.map((note) => (
          <NoteCard key={note.id} {...note} />
        ))}
      </ul>
      <footer className="note__editor">
        <textarea name="note" id="note" placeholder="Enter your text here..." />
        <img
          role="button"
          className="note__add__btn"
          width="25"
          height="25"
          src={sendIcon}
        />
      </footer>
    </section>
  );
};

export default GroupNotes;
