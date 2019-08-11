import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './App.scss';

// Components
import Transaction from './js/views/Transaction';
import Steps from './js/components/Steps';

const cx = classnames.bind(styles);

function App() {
  const [expandSide, setExpandSide] = useState(false);
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 960) setExpandSide(false);
    });
    return () => {
      window.removeEventListener('resize', () => {
        if (window.innerWidth > 960) setExpandSide(false);
      });
    };
  }, []);
  return (
    <div className={cx('App')}>
      <div className={cx('container')}>
        <div className={cx('header')}>
          <Steps />
        </div>
        <div className={cx('content')}>
          <div className={cx('content--4')}>
            <div className={cx('product', { 'product--active': expandSide })}>
              <div
                className={cx('product-info-button')}
                onClick={() => setExpandSide(!expandSide)}
              >
                訂單資訊
              </div>
              <div className={cx('product-zone')}>
                <img
                  src={require('./assets/product@2x.png')}
                  width="100%"
                  alt="products"
                />
                <p className={cx('product-title')}>
                  玩具解剖展｜夜間加場：紐約街頭潮 玩派對 Special Guest DJ
                  RayRay
                </p>
                <ul className={cx('product-content')}>
                  <li>2019-08-09(五) 19:30 ~ 21:00 (GMT+8)</li>
                  <li>台灣台北市中正區八德路一段1號</li>
                  <li>訂單編號：1908020833432821107310</li>
                </ul>
                <div className={cx('product-footer')}>總價： 1688元</div>
              </div>
            </div>
          </div>
          <div className={cx('content--6')}>
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
