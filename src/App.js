import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { ContactsPages, HomePage, LoginPage, RegistrationPage } from './pages';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Spinner from 'react-spinkit';
import { getCurrentUser } from './redux/auth/authOperations';
import { getIsGettingCurrentUser } from './redux/auth/authSelectors';
import { AppBar } from './components/AppBar/AppBar';
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage.js'));
const ContactsPages = lazy(() => import('./pages/ContactsPages.js'));

function App() {
  const refreshing = useSelector(getIsGettingCurrentUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !refreshing && (
      <div>
        <AppBar />
        <Suspense
          className="Container"
          fallback={<Spinner name="pacman" color="steelblue" />}
        >
          <Routes>
            <>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute restricted={true}>
                    <RegistrationPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute restricted={true}>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactsPages />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          </Routes>
        </Suspense>
      </div>
    )
  );
}
export default App;
