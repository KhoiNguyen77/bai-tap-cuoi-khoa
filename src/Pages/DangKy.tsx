import React from 'react'
import { NavLink } from 'react-router-dom'
import { dispatchType } from '../Reducer/configStore';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { signUp } from '../Reducer/userReducer';
type Props = {}
export interface formRegister {
  id: number,
  name: string,
  email: string,
  password: string,
  phone: string,
  birthday: string,
  gender: boolean,
  role: string,
}
const DangKy = (props: Props) => {
  const dispatch: dispatchType = useDispatch();
  const registerMik = useFormik<formRegister>({
    initialValues: {
      id: 0,
      name: '',
      email: '',
      password: '',
      phone: '',
      birthday: '',
      gender: true,
      role: '',
    },
    onSubmit: (values: formRegister) => {
      const actionSignUp = signUp(values);
      dispatch(actionSignUp);
      console.log(actionSignUp)

    },
    validationSchema: yup.object().shape({
      email: yup.string().required("Không đẻ được trống email!").email("Email không đúng !"),
      password: yup.string().required("Không để được trống mật khẩu!").min(5, "Mât khẩu phải ít nhất 5 ký tự").max(15, "Mật khẩu không được dài quá 8 ký tự"),
      name: yup.string().required("Không để trống họ tên"),
      birthday: yup.string().required(" Không để trống ngày sinh"),
      gender: yup.string().required("Vui lòng chọn giới tính !"),
      phone: yup.string().required("").max(10, "Số điện thoại phải có 10 số"),
      role: yup.string().required("Không để trống địa chỉ"),
    })
  })
  return (
    <div>
      <div className="w-screen h-screen relative" style={{
        backgroundImage: `url('../images/logo_login.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      >
        <div className="relative font-medium md:h-screen flex items-center content-center w-full">
          <div className="mr-auto ml-auto w-full">

            <div className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 border rounded-lg shadow-lg bg-white px-10 py-5 w-4/5 sm:w-2/3 mx-auto">


              <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-1 text-center flex justify-center ">
                <svg
                  width={32}
                  height={32}
                  fill="currentcolor"
                  className="text-red-400"
                >
                  <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z" />
                </svg>

                <h1 className="text-red-400  text-3xl font-extrabold font-title ">
                  Đăng Ký</h1>
              </div>
              <form onSubmit={registerMik.handleSubmit}>
                <div className="container mx-auto px-10 grid sm:grid-cols-2 gap-4 mt-9">

                  <div className="mb-4 w-full">
                    <div className='mb-3'>
                      <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="username"> Tên người dùng
                      </label>
                      <span className='text-red-500'>{registerMik.errors.name}</span>
                      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="name" name='name' type="text" placeholder="Điền tên người dùng" onChange={registerMik.handleChange} value={registerMik.values.name} />
                    </div>
                    <div className='mb-3'>
                      <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="sdt"> Số điện thoại </label>
                      <span className='text-red-500 '>{registerMik.errors.phone}</span>
                      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="phone" type="number" placeholder="Điền số điện thoại" onChange={registerMik.handleChange} value={registerMik.values.phone} />
                    </div>
                    <div className='mb-3'>
                      <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="address"> Địa chỉ </label>
                      <span className='text-red-500'>{registerMik.errors.role}</span>
                      <input className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                     dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="role" type='text' name='role' placeholder="Địa chỉ" onChange={registerMik.handleChange} value={registerMik.values.role} />
                    </div>
                    <div className='mb-3'>
                      <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="gender"> giới tính </label>
                      <span className='text-red-500'>{registerMik.errors.gender}</span>
                      <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="gender"
                        onChange={registerMik.handleChange} //defaultValue={registerMik.values.gender}
                      >
                        <option value="true">Nam</option>
                        <option value="false">Nữ</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6 w-full ml-2">
                    <div className="mb-3">
                      <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="email"> Email </label>
                      <span className='text-red-500'>{registerMik.errors.email}</span>
                      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" placeholder="Email" onChange={registerMik.handleChange} value={registerMik.values.email} />
                    </div>
                    <div className="mb-3">
                      <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="password"> Mật Khẩu  </label>
                      <span className='text-red-500'>{registerMik.errors.password}</span>
                      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="password" type="password" placeholder="***********" onChange={registerMik.handleChange} value={registerMik.values.password} />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="birthday"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Ngày Sinh
                      </label>
                      <input
                        type="date"
                        id="birthday"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button type="submit" className="bg-red-500 hover:bg-red-800 shadow-lg text-white font-semibold text-sm py-3 px-0 rounded-full text-center w-80 hover:bg-tertiary duration-200 transition-all">
                    Đăng Ký
                  </button>
                </div>
              </form>
              <div className=" mb-6 text-center">

                <NavLink to="/dang-nhap" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Đăng Nhập ngay !!
                </NavLink>

              </div>

            </div>

          </div>
        </div>

      </div >
    </div>
  )
}

export default DangKy