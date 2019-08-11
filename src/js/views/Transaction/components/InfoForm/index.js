import React from 'react';
// import PropTypes from 'prop-types';
import styles from './style.module.scss';
import classnames from 'classnames/bind';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import validationSchema from './validationSchemea';

// Components
import InputField from '../../../../components/InputField';
import Label from '../../../../components/Label';
import Textarea from '../../../../components/Textarea';
import Button from '../../../../components/Button';

const cx = classnames.bind(styles);

function InfoForm(props) {
  const initialValues = {
    name: '',
    email: '',
    mobile: '',
    adults: 1,
    children: 1,
    coupon: '',
    checkbox: '',
    remark: ''
  };

  return (
    <div className={cx('form-container')}>
      <Formik
        className={cx('info-form')}
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values, actions, ...props) => console.log(...props)}
        render={({
          values,
          errors,
          status,
          touched,
          isSubmitting,
          resetForm,
          handleSubmit
        }) => (
          <FormikForm>
            {/* 姓名電話 */}
            <div className={cx('form-row')}>
              <div className={cx('form-col')}>
                <Label htmlFor="name" value="姓名" isRequired />
                <InputField
                  name="name"
                  id="name"
                  value={values.name || ''}
                  error={errors.name && touched.name && true}
                />
                <ErrorMessage name="name">
                  {errorMessage => <div className="error">{errorMessage}</div>}
                </ErrorMessage>
              </div>
              <div className={cx('form-col')}>
                <Label htmlFor="mobile" value="行動電話" isRequired />
                <InputField
                  name="mobile"
                  id="mobile"
                  value={values.mobile || ''}
                  error={errors.mobile && touched.mobile && true}
                />
                <ErrorMessage name="mobile">
                  {errorMessage => <div className="error">{errorMessage}</div>}
                </ErrorMessage>
              </div>
            </div>
            {/* 姓名電話 */}

            {/* Email 日期 */}
            <div className={cx('form-row')}>
              <div className={cx('form-col')}>
                <Label htmlFor="email" value="電子郵件" isRequired />
                <InputField
                  name="email"
                  id="email"
                  value={values.email || ''}
                  error={errors.email && touched.email && true}
                />
                <ErrorMessage name="email">
                  {errorMessage => <div className="error">{errorMessage}</div>}
                </ErrorMessage>
              </div>
              <div className={cx('form-col')}>
                <Label htmlFor="activity-date" value="活動日期" />
                <InputField
                  name="activity-date"
                  id="activity-date"
                  value="2019/08/09"
                  readOnly
                />
                <ErrorMessage name="activity-date">
                  {errorMessage => <div className="error">{errorMessage}</div>}
                </ErrorMessage>
              </div>
            </div>
            {/* Email 日期 */}

            {/* 參加人數 優惠代碼 */}
            <div className={cx('form-row')}>
              <div className={cx('form-col')}>
                <Label htmlFor="attendance" value="參加人數" isRequired />
                <div className={cx('form-row')} style={{ marginBottom: '0' }}>
                  <div className={cx('special-section')}>
                    <div className={cx('form-row')} style={{ width: '50%' }}>
                      <Label htmlFor="adults" value="成人" />
                    </div>
                    <div className={cx('form-row')}>
                      <InputField
                        name="adults"
                        id="adults"
                        type="number"
                        value={values.adults || ''}
                        error={errors.adults && touched.adults && true}
                      />
                    </div>
                  </div>
                  <div className={cx('special-section')}>
                    <div className={cx('form-row')} style={{ width: '50%' }}>
                      <Label htmlFor="children" value="小孩" />
                    </div>
                    <div className={cx('form-row')}>
                      <InputField
                        name="children"
                        id="children"
                        type="number"
                        value={values.children || ''}
                        error={errors.children && touched.children && true}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx('form-col')}>
                <Label htmlFor="coupon" value="優惠代碼" />
                <InputField name="coupon" id="coupon" value={values.coupon || ''} />
                <ErrorMessage name="coupon">
                  {errorMessage => <div className="error">{errorMessage}</div>}
                </ErrorMessage>
              </div>
            </div>
            {/* 參加人數 優惠代碼 */}

            {/* 備註 */}
            <div className={cx('form-row')}>
              <div className={cx('form-col', 'form-col--full')}>
                <Textarea name="remark" value={values.remark || ''} />
              </div>
            </div>
            {/* 備註 */}

            {/* Checkbox */}
            <Field name="checkbox">
              {({ field, form }) => {
                return (
                  <div
                    className={cx('form-row')}
                    style={{ alignItems: 'center' }}
                  >
                    <input type="checkbox" {...field} />
                    <label className={cx('info-form__checkbox')}>
                      我已閱讀並同意
                      <span
                        className={cx(
                          'info-form__checkbox',
                          'info-form__checkbox--primary'
                        )}
                      >
                        票券訂購暨使用須知
                      </span>
                      內容所有條款
                    </label>
                  </div>
                );
              }}
            </Field>
            {/* Checkbox */}

            <div className={cx('info-form__footer')}>
              <Button
                onClick={event => {
                  event.preventDefault();
                  resetForm();
                }}
                htmlType="submit"
                type="dark"
                size="md"
                style={{ marginRight: '20px' }}
              >
                取消
              </Button>
              <Button htmlType="submit" size="md">
                下一步
              </Button>
            </div>
          </FormikForm>
        )}
      />
    </div>
  );
}

export default InfoForm;
