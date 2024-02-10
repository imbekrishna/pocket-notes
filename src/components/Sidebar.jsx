import { Link, useParams } from 'react-router-dom';
import GroupLogo from './GroupLogo';
import { useState } from 'react';
import { getGroups } from '../utils/helpers';

const Sidebar = (props) => {
  const params = useParams();
  const groups = getGroups();
  const [active, setActive] = useState(params.id);

  return (
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
      <button onClick={props.closeModal} className="btn-fab">
        +
      </button>
    </main>
  );
};

export default Sidebar;
