import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import s from './homePage.module.css';

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <h1 className={s.title}>Welcome to YPCB</h1>
      <div className={s.wrapper}>
        <LogoIcon width='200' height='200' />
        <div className={s.logoTextWrapper}>
          <span className={s.letter}>Y - Your</span>
          <span className={s.letter}>P - Personal</span>
          <span className={s.letter}>C - Contacts</span>
          <span className={s.letter}>B - Book</span>
        </div>
      </div>
      <div className={s.messageWrapper}>
        <p className={s.message}>
          Welcome to our app, to get access to all the functionality, you need to go through the registration or
          authorization procedure.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
