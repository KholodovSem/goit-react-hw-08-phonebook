import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as UserIcon } from '../../../images/user.svg';
import s from './UserMenu.module.css';
import { logOut } from '../../../store/userOperations';


const UserMenu = () => {
  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();


  if (!userState.isLogin) {
    return (
      <nav className={s.authNav}>
        <NavLink to='registration'
                 className={({ isActive }) => isActive ? `${s.activeLink}` : `${s.link}`}>Registration</NavLink>
        <NavLink to='login' className={({ isActive }) => isActive ? `${s.activeLink}` : `${s.link}`}>Login</NavLink>
      </nav>
    );
  }

  return (
    <div className={s.userMenu}>
      <nav className={s.nav}>
        <NavLink to='/'
                 className={({ isActive }) => isActive ? `${s.activeLink}` : `${s.link}`}>Home</NavLink>
        <NavLink to='/contacts' className={({ isActive }) => isActive ? `${s.activeLink}` : `${s.link}`}>Contacts</NavLink>
      </nav>
      <UserIcon width='50' height='50' />
      <span className={s.userName}>{userState.name}</span>
      <button className={s.btn} onClick={() => {
        dispatch(logOut());

      }}>Logout</button>
    </div>
  );
};

export default UserMenu;
