import { Link } from 'react-router-dom';
import { groups } from '../utils/data';
import GroupLogo from './GroupLogo';
import { useState } from 'react';
import AddGroup from '../pages/AddGroup';

const Sidebar = () => {
  const [modalShowing, setModalShowing] = useState(false);
  const handleClick = () => {
    setModalShowing((prev) => !prev);
  };
  return (
    <main className="sidebar">
      <h1 className="sidebar__header">Pocket Notes</h1>
      <div className="sidebar__grps">
        <ul className="grps__container">
          {groups.map((group) => (
            <li key={group.id} className="grp__item">
              <Link to={`/group/${group.id}`} className="grp__item__link">
                <GroupLogo name={group.name} />
                <span className="grp__name">{group.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleClick} className="btn-fab">
        +
      </button>
      <div
        className={`add_group__container ${modalShowing && 'isVisible'}`}
        onClick={handleClick}
      >
        <AddGroup closeModal={handleClick} />
      </div>
    </main>
  );
};

export default Sidebar;
