import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classnames.bind(styles);

const propTypes = {
  htmlFor: PropTypes.string,
  isRequired: PropTypes.bool,
  value: PropTypes.string
};

function Label(props) {
  const { htmlFor, isRequired, value, ...restProps } = props;
  return (
    <label className={cx('label')} htmlFor={htmlFor} data-is-required={isRequired} {...restProps} >
      {value}
    </label>
  );
}

Label.propTypes = propTypes;
export default Label;
