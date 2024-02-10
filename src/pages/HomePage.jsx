import { useOutlet } from 'react-router-dom';
import { useState } from 'react';
import AddGroup from './AddGroup';
import Sidebar from '../components/Sidebar';
import Welcome from '../components/Welcome';

const HomePage = () => {
  const outlet = useOutlet();
  const [modalShowing, setModalShowing] = useState(false);
  const handleClick = () => {
    setModalShowing((prev) => !prev);
  };

  return (
    <>
      <div className="root__layout">
        <div className={` ${outlet && 'hide-on-mobile-only'}`}>
          <Sidebar closeModal={handleClick} />
        </div>
        {outlet ? outlet : <Welcome />}
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

export default HomePage;
