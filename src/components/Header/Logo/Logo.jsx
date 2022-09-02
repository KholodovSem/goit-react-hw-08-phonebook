import { ReactComponent as LogoIcon } from '../../../images/logo.svg';
import s from './Logo.module.css';
import {useNavigate} from 'react-router-dom'


const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className={s.logo} onClick={() => navigate('/')}>
      <LogoIcon width='50' height="50"/>
      <div className={s.logoTextWrapper}>
      <span className={s.letter}>Y</span>
      <span className={s.letter}>P</span>
      <span className={s.letter}>C</span>
      <span className={s.letter}>B</span>
      </div>
    </div>
  );
};

export default Logo;
