import welcomeImage from '../assets/welcome-img.png';
import lockIcon from '../assets/lock.svg';

const HomePage = () => {
  return (
    <div className="welcome__screen hide-on-mobile-only">
      <div className="welcome__top">
        <img className="welcome__image" src={welcomeImage} alt="" />
        <h1>Pocket Notes</h1>
        <p>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <p className="welcome__bottom">
        <img src={lockIcon} alt="" />
        <span>end-to-end encrypted</span>
      </p>
    </div>
  );
};

export default HomePage;
