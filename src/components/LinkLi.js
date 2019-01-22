import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const LinkLi = props => {
  const {
    path,
    redirect,
    exact,
    className,
    activeClassName,
    children,
  } = props;

  return (
    <Route
      exact={exact}
      path={path}
      children={({ match, history }) => (
        <li
          className={(match ? activeClassName : className )}
          onClick={() => {
            history.push(redirect || path);
          }}
        >
          {children}
        </li>
      )}
    />
  );
};

LinkLi.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LinkLi;
