import { useOutlet } from 'react-router-dom';
import React, { useState } from 'react';
import AddGroup from './AddGroup';
import Sidebar from '../components/Sidebar';
// import Welcome from '../components/Welcome';

const HomePage = () => {
  const Welcome = React.lazy(() => import('../components/Welcome'));

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
        {outlet ? (
          outlet
        ) : (
          <div className="welcome__screen hide-on-mobile-only">
            <React.Suspense fallback={<p>Loading...</p>}>
              <Welcome />
            </React.Suspense>
          </div>
        )}
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
