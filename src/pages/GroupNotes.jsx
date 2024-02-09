import { Link } from 'react-router-dom';
import sendIcon from '../assets/send.svg';
import arrowBack from '../assets/arrow-back.svg';
import GroupLogo from '../components/GroupLogo';

const GroupNotes = () => {
  return (
    <section className="notes__container">
      <header className="notes__header">
        <img src={arrowBack} className="back-btn" height="25" width="25" />
        <Link to={`/group/${1}`} className="grp__item__link">
          <GroupLogo name={'My Group'} />
          <span className="grp__name">{'My Group'}</span>
        </Link>
      </header>
      <ul className="notes__list">
        <li className="note__item">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            corporis, praesentium cumque ratione libero consectetur sit quidem
            inventore eligendi recusandae incidunt soluta tempora nam amet
            adipisci dicta eveniet accusantium nobis.
          </p>
          <p className='note__item__meta'>
            <span>9 Mar 2023</span>&bull;<span>10:10 AM</span>
          </p>
        </li>
      </ul>
      <footer className="note__editor">
        <textarea
          name="note"
          id="note"
          rows="5"
          placeholder="Enter your text here..."
        />
        <img src={sendIcon} />
      </footer>
    </section>
  );
};

export default GroupNotes;
