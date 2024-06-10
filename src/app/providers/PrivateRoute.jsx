import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component, redirect = '/login' }) => {
  const { token } = useSelector((state) => state.auth);
  return token ? component : <Navigate to={redirect} />;
};
PrivateRoute.propTypes = {
  component: PropTypes.node,
  redirect: PropTypes.string,
};
