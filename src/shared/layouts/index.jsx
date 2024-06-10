import PropTypes from 'prop-types';

export const SharedLayout = ({ children }) => {
  return (
    <div>
      <header className=""></header>
      <main>{children}</main>
    </div>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
