import s from './Header.module.css';
import Logo from './Logo/Logo';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <UserMenu />
    </header>
  );
};

export default Header;
