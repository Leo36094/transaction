import * as Yup from 'yup'

const phoneRegExp = /^09\d{8}$/

export default Yup.object().shape({
  name: Yup.string().required('請輸入名稱'),
  email: Yup.string().email('格式錯誤').required('請輸入E-mail'),
  mobile: Yup.string().matches(phoneRegExp, '格式錯誤'),
  attendance: Yup.number().required()
})

