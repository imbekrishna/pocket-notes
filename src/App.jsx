import './App.css';
import { groups } from './utils/data';
import { getGroupInitials } from './utils/helpers';

function App() {
  return (
    <main className="sidebar">
      <h1 className="sidebar__header">Pocket Notes</h1>
      <div className="sidebar__grps">
        <ul className="grps__container">
          {groups.map((group) => (
            <li key={group.id} className="grp__item">
              <span className="grp__logo">{getGroupInitials(group.name)}</span>
              <span className="grp__name">{group.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="btn-fab">+</button>
    </main>
  );
}

export default App;
