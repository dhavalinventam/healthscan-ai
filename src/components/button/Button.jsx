import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ 
  children, 
  variant = 'fill', 
  size, // ignored to enforce a single size globally
  disabled = false, 
  loading = false,
  onClick, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const buttonClasses = [
    'button',
    `button--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['fill', 'outline']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default Button; 