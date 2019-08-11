import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.module.scss';
import { Field } from 'formik';

const cx = classnames.bind(styles);

const propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  row: PropTypes.number,
  col: PropTypes.number,
};

const defaultProps = {
  row: 5,
  col: 50
};

function Textarea(props) {
  const { name, id, row, col } = props;

  return (
    <Field name={name}>
      {({ field, form }) => {
        return <textarea className={cx('textarea')} id={id} rows={row} col={col} {...field} />;
      }}
    </Field>
  );
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;
export default Textarea;
