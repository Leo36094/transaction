import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classnames.bind(styles);

function Steps(props) {
  return (
    <ul className={cx('steps')}>
      <li data-title="填寫資料" className={cx('steps__icon', 'steps__icon--active')}>
        <i className={cx('far', 'fa-user')} />
      </li>
      <li className={cx("steps__progress-bar")} />
      <li data-title="選擇付款方式" className={cx('steps__icon')}>
        <i className={cx("fas", "fa-dollar-sign")}></i>
      </li>
      <li className={cx("steps__progress-bar")} />
      <li data-title="前往付款" className={cx('steps__icon')}>
        <i className={cx('far', 'fa-credit-card')} />
      </li>
    </ul>
  );
}
export default Steps;
