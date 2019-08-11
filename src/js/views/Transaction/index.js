import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.module.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import InfoForm from './components/InfoForm';

const cx = classnames.bind(styles);

const propTypes = {
  path: PropTypes.object,
  match: PropTypes.object
};

function Transaction(props) {
  return (
    <div className={cx('transaction')}>
      <div className={cx('transaction-form')}>
        <div className={cx('steps')}>
          <div className={cx('steps-header')}>
            <span className={cx('steps-header__title')}>Step.1</span>
            <span className={cx('steps-header__description')}>
              填寫聯絡人資訊
            </span>
          </div>
        </div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={InfoForm} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}
Transaction.propTypes = propTypes;
export default Transaction;
