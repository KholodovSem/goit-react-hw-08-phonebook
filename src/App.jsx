import { Routes, Route, Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import AuthPage from './components/views/authPage';
import HomePage from './components/views/homePage';
import { useEffect } from 'react';
import { fetchCurrentUser } from './store/userOperations';
import Layout from './components/views/Layout';
import ContactBook from './components/ContactBook/ContactBook';

function App() {
  const isLogin = useSelector(state => state.user.isLogin)
  const isLoading = useSelector(state => state.user.isLoading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return (
    <>
    {isLoading?
      <Layout />
    :
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="contacts" element={isLogin ? <ContactBook /> : <Navigate to='/login' />} />
            <Route path='registration' element={isLogin ? <Navigate to='/contacts' /> : <AuthPage useMatchParam="/registration"/>} />
            <Route path='login' element={isLogin ? <Navigate to='/contacts' /> : <AuthPage useMatchParam="/login" />} />
            <Route path="*" element={<Navigate to='/' />} />
          </Route>
        </Routes>}
    </>
  );
}

export default App;

