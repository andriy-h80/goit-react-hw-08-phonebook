// import { Phonebook, Container } from './App.styled';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Loader from '../components/Loader/Loader';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));


const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute navigateTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute navigateTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute navigateTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="*"
          element={
            <RestrictedRoute navigateTo="/" component={<HomePage />} />}
        />
      </Route>
    </Routes>
  );

    // return (
    //   <Phonebook >
    //     <Container>
    //       <h1>Phonebook</h1>
    //       <ContactForm /> 
    //       <h2>Contacts</h2>
    //       <Filter />
    //       <ContactList />
    //     </Container>
    //   </Phonebook>
    // );
};

export default App;
