import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ component, redirect = '/' }) => {
  const { token } = useSelector((state) => state.auth);
  return token ? <Navigate to={redirect} /> : component;
};
PublicRoute.propTypes = {
  component: PropTypes.node,
  redirect: PropTypes.string,
};
