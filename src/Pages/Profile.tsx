import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { NavLink, useParams } from "react-router-dom";
import { RootState, dispatchType } from '../Reducer/configStore';
import { getProfileApi } from '../Reducer/userReducer';


type Props = {}
export interface formProfile {
  id: number,
  name: string,
  email: string,
  password: string,
  phone: string,
  birthday: string,
  gender: boolean,
  role: string,
  avatar: string

}
const Profile = (props: Props) => {
  const { userProfile } = useSelector((state: RootState) => state.userReducer);
  const dispatch: dispatchType = useDispatch();

  const params = useParams();
  const getUserProfile = async (id: any) => {
    const action = await getProfileApi(id);
    dispatch(action);
  }
  useEffect(() => {
    getUserProfile(params.id);
  }, [])
  return (
    <div >
      <div className="  mt-10 flex flex-wrap items-center  justify-center  ">
        <div className=" sticky top-32 container lg:w-1/5 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out ">
          <div className=" h-32 overflow-hidden justify-start">
            <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
          </div>
          <div className="flex justify-center px-5  -mt-12">
            <img className="h-32 w-32 bg-white p-2 rounded-full   " src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3" />

          </div>
          <div className=" ">
            <div className="text-center px-14">
              <p className="text-gray-400 mt-2"> <NavLink to='' className="text-blue-300 hover:underline">
                Cập nhật hình ảnh
              </NavLink></p>

              <h2 className="text-gray-800 text-3xl font-bold">{userProfile?.name}</h2>

              <p className="mt-2 text-gray-600">Xác minh danh tính của bạn với huy hiệu xác minh danh tính. </p>
              <button className="border shadow-lg px-5 py-2.5 rounded-lg hover:bg-gray-200 duration-200 font-semibold text-gray-800 my-1">Nhận huy hiệu</button>

            </div>
            <hr className="mt-6" />
            <div className="flex  bg-gray-50 ">
              <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <p><span className="font-semibold">2.5 k </span> Followers</p>
              </div>
              <div className="border" />
              <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <p> <span className="font-semibold">2.0 k </span> Following</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl  bg-white w-full items-center ">

          <div>
            <div className="md:grid md:grid-cols-2  hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border mb-3">
              <div className='border-b-2'>
                <h3>
                  Họ và tên
                </h3>

                <p className='text-gray-500' >
                  Jane Doe
                </p>
              </div>


              <NavLink to='' className="text-blue-300 hover:underline">
                Thay đổi
              </NavLink>

            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b mb-3">
              <div>
                <h3>
                  Ngày sinh
                </h3>

                <p className='text-gray-500' >
                  03/06/1995
                </p>
              </div>


              <NavLink to='' className="text-blue-300 hover:underline">
                Thay đổi
              </NavLink>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b mb-3">
              <div>
                <h3>
                  Đia chỉ Email
                </h3>

                <p className='text-gray-500' >
                  Jane Doe
                </p>
              </div>


              <NavLink to='' className="text-blue-300 hover:underline">
                Thay đổi
              </NavLink>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b mb-3">

              <div>
                <h3>
                  Số điện thoại
                </h3>

                <p className='text-gray-500' >
                  0123456789
                </p>
              </div>


              <NavLink to='' className="text-blue-300 hover:underline">
                Thay đổi
              </NavLink>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b mb-3">
              <div>
                <h3>
                  Địa chỉ nhà
                </h3>

                <p className='text-gray-500' >
                  nguyễn chí thanh
                </p>
              </div>


              <NavLink to='' className="text-blue-300 hover:underline">
                Thay đổi
              </NavLink>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
              <p className="text-gray-600">
                Attachments
              </p>

            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Profile