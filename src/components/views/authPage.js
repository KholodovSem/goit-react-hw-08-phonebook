import Form from '../Form/Form';
import s from './authPage.module.css';
import { useState, useEffect } from 'react';
import {useMatch} from 'react-router'
import PropTypes from 'prop-types';

const AuthPage = ({useMatchParam}) => {
  const { pathname } = useMatch(useMatchParam);
  const [textForWrapper, setTextFormWrapper] = useState('');

  useEffect(() => {
    if (pathname === "/registration"){
      setTextFormWrapper ("In order to use the application, please register")
      return;
    }
    setTextFormWrapper ("In order to use the application, please login")
  }, [pathname])

  return (
    <div className={s.authPage}>
      <div className={s.welcomeMessageWrapper}>
        <p>
          {textForWrapper}
        </p>
      </div>
      <Form onSubmit={setTextFormWrapper} pathname={pathname}/>
    </div>
  );
};

AuthPage.propTypes = {
  useMatchParam: PropTypes.string.isRequired
}

export default AuthPage;

