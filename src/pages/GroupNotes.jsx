import { Link } from 'react-router-dom';
import arrowBack from '../assets/arrow-back.svg';
import sendIcon from '../assets/send.svg';
import GroupLogo from '../components/GroupLogo';
import NoteCard from '../components/NoteCard';
import { notes } from '../utils/data';

import { useParams } from 'react-router-dom';
import { getGroupById } from '../utils/helpers';

const GroupNotes = () => {
  const params = useParams();
  const group = getGroupById(params.id);
  // TODO: Can we use useState?
  return (
    <section className="notes__container">
      <header className="notes__header">
        <Link to={'..'} className="back__btn">
          <img role="button" src={arrowBack}/>
        </Link>
        <div className="grp__item__link">
          <GroupLogo name={group?.name} />
          <span className="grp__name">{group?.name}</span>
        </div>
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
