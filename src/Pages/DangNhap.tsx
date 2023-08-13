import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, dispatchType } from '../Reducer/configStore'
import { LoginActionApi } from '../Reducer/userReducer'
import useSelection from 'antd/es/table/hooks/useSelection'
import { history } from "../index";

export interface formValue {
  email: string,
  password: string,

}

type Props = {}

const DangNhap = (props: Props) => {
  const { userProfile } = useSelector((state: RootState) => state.userReducer);

  const dispatch: dispatchType = useDispatch();
  const frm = useFormik<formValue>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('email không được để trống!').email('sai định dạng email'),
      password: yup.string().required('password không để trống !')
    }),
    onSubmit: (value: formValue) => {
      const actionAsync = LoginActionApi(value);
      dispatch(actionAsync);

    }
  });
  useEffect(() => {
    if (userProfile) { 
      history.push(`thong-tin-ca-nhan/${userProfile.id}`)
    }
  })

  return (

    <div className="w-screen h-screen relative" style={{

      backgroundImage: `url('../images/logo_login.jpg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
    >

      <div className="relative font-medium md:h-screen flex items-center content-center">
        <div className="mr-auto ml-auto w-full">

          <div className="w-full max-w-md mr-auto ml-auto mt-4">

            <div className="bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto">
              <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-1 text-center flex justify-center">
                <svg
                  width={32}
                  height={32}
                  fill="currentcolor"
                  className="text-red-400"
                >
                  <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z" />
                </svg>
                <h1 className="text-red-400 block text-3xl font-extrabold font-title px-2 ">
                  Đăng Nhập</h1>
              </div>
              <form onSubmit={frm.handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="username"> Email
                  </label>
                  <input className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300" id="email" name="email" placeholder="user@example.com" onChange={frm.handleChange} />
                  <p className='text-red-400'>{frm.errors.email}</p>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="username"> Password </label>
                  <input className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300" id="password" type="password" placeholder="**********" onChange={frm.handleChange} />
                  <p className='text-red-400'>{frm.errors.password}</p>
                </div>
                <div className="mb-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="text-center sm:text-left">
                      <label>
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm font-medium text-gray-700 ">Remember me</span>
                      </label>
                    </div>
                    <div className="text-center sm:text-right">
                      <a href="#" className="text-red-300 font-medium text-sm duration-200 transition-colors hover:text-red-800">Quên mật khẩu ?</a>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <button type="submit" className="bg-red-500 hover:bg-red-800 shadow-lg text-white font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all">
                    Đăng nhập
                  </button>
                </div>
              </form>
              <div className="grid sm:grid-cols-3 gap-0 mb-6">
                <hr className="mt-3 hidden sm:block border-gray-400" />

              </div>
              <p className="mt-10 text-center text-sm text-gray-500">
                Chưa có tài khoản ?{' '}
                <NavLink to="/dang-ky" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Đăng ký ngay !!
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default DangNhap