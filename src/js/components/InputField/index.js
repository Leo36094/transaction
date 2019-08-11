import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import styles from './style.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  readOnly: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.bool,
  type: PropTypes.string,
};

function InputField(props) {
  const { placeholder, name, id, readOnly, value, error, type } = props;

  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <input
            className={cx('input')}
            data-is-error={error}
            id={id}
            placeholder={placeholder}
            readOnly={readOnly}
            {...field}
            value={value}
            type={type}
          />
        );
      }}
    </Field>
  );
}

InputField.propTypes = propTypes;
export default InputField;
