import { Link, useOutlet, useParams } from 'react-router-dom';
import GroupLogo from './GroupLogo';
import { useState } from 'react';
import AddGroup from '../pages/AddGroup';
import { getGroups } from '../utils/helpers';
import HomePage from '../pages/HomePage';
const Sidebar = () => {
  const outlet = useOutlet();
  const params = useParams();
  const groups = getGroups();
  const [modalShowing, setModalShowing] = useState(false);
  const [active, setActive] = useState(params.id);
  const handleClick = () => {
    setModalShowing((prev) => !prev);
  };

  return (
    <>
      <div className="root__layout">
        <div className={` ${outlet && 'hide-on-mobile-only'}`}>
          <main className="sidebar">
            <h1 className="sidebar__header">Pocket Notes</h1>
            <div className="sidebar__grps">
              <ul className="grps__container">
                {groups.map((group) => (
                  <li
                    key={group.id}
                    className={`grp__item ${
                      active && active === group.id ? 'grp__item-active' : ''
                    }`}
                    onClick={() => setActive(group.id)}
                  >
                    <Link to={`/group/${group.id}`} className="grp__item__link">
                      <GroupLogo name={group.name} color={group.color} />
                      <span className="grp__name">{group.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={handleClick} className="btn-fab">
              +
            </button>
          </main>
        </div>
        {outlet ? outlet : <HomePage />}
      </div>
      <div
        className={`add_group__container ${modalShowing && 'isVisible'}`}
        onClick={handleClick}
      >
        <AddGroup closeModal={handleClick} />
      </div>
    </>
  );
};

export default Sidebar;
