import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { deleteGroupById } from '../utils/helpers';
import GroupItem from './GroupItem';
import { GroupContext } from '../App';

const Sidebar = (props) => {
  const params = useParams();
  const [active, setActive] = useState(params.id);

  const { groups } = useContext(GroupContext);

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
              onDoubleClick={() => deleteGroupById(group.id)}
            >
              <GroupItem group={group} />
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
