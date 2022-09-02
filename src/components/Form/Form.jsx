import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import TextField from '@mui/material/TextField';
import s from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, registration } from '../../store/userOperations';
import {handleError} from '../../store/userSlice';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, pathname }) => {
  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userState.error === "none" && userState.token !== null) {
      toast.success(() => {
        if (pathname === '/registration'){
          return 'You are registered'
        }

        return "You are logged in"
      });
      dispatch(handleError())
      setTimeout(() => {
        navigate("/contacts", {replace: true})
      }, 1000);
      return;
    }

    if (userState.error !== null) {
      toast.error('Ooops, please try again');
    }

  }, [userState.error, dispatch, navigate, userState.token, pathname])

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = e.currentTarget.elements?.name?.value;
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    onSubmit('Gooood Boy... or Girl');

    if(pathname === "/registration"){
      const credentials = {
        name,
        email,
        password,
      };

      dispatch(registration(credentials));
      form.reset();
      return;
    }

    const credentials = {
      email,
      password,
    };

    dispatch(login(credentials));
    form.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {pathname === "/registration" ?
        <TextField
          name='name'
          required={true}
          label='Name'
          variant='outlined'
          margin='dense'
        /> :
        null
      }
      <TextField
        name='email'
        required={true}
        label='Email'
        variant='outlined'
        margin='normal'
      />
      <TextField
        name='password'
        required={true}
        type='password'
        label='Password'
        variant='outlined'
        margin='normal'
      />
      <Button type='submit' variant='outlined' className={s.button}>
        {pathname === '/registration' ?
          "Sign Up" :
          "Login"
        }
      </Button>
      <ToastContainer />
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired
}

export default Form;

