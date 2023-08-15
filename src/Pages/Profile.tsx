import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { RootState, dispatchType } from "../Reducer/configStore";
import { getProfileApi } from "../Reducer/userReducer";
import { Button, Divider, Radio } from "antd";
import UpdateProfile from "../Layout/UpdateProfile";
import UpdateAvatar from "../Layout/UpdateAvatar";
import { USER_PROFILE, getStoreJson } from "../util/config";

type Props = {};
export interface formProfile {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
  avatar: string;
}
const Profile = (props: Props) => {
  const { userProfile } = useSelector((state: RootState) => state.userReducer);
  const dispatch: dispatchType = useDispatch();
  const profile = getStoreJson(USER_PROFILE);
  const { id } = useParams();
  const getUserProfile = async (id: any) => {
    const action = await getProfileApi(id);
    dispatch(action);
  };



  console.log(id);
  useEffect(() => {
    getUserProfile(id);
  }, [id]);
  return (
    <div>
      <div className=" flex flex-wrap items-start justify-center  ">
        <div className=" sticky top-1 container lg:w-1/5 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out ">
          <div className=" h-32 overflow-hidden justify-end">
            <img
              className="w-full i"
              src="../images/airbnb.png"
            />
          </div>
          <div className="flex justify-center -mt-12">
            <img
              className="h-32 w-32 bg-white p-2 rounded-full   "
              src={userProfile?.avatar ? userProfile?.avatar : "https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"}
            />
          </div>
          <div className=" ">
            <div className="text-center px-14">
              <p className="text-gray-400 mt-2">
                {" "}
                <UpdateAvatar />
              </p>

              <h2 className="text-gray-800 text-1xl font-bold">
                {userProfile?.name}
              </h2>
              <h2 className="text-gray-800 text-2xl font-bold">
                {userProfile?.role}
              </h2>

              <p className="mt-2 text-gray-600">
                Xác minh danh tính của bạn với huy hiệu xác minh danh tính.{" "}
              </p>
              <button className="border shadow-lg px-5 py-2.5 rounded-lg hover:bg-gray-200 duration-200 font-semibold text-gray-800 my-1">
                Nhận huy hiệu
              </button>
            </div>
            <hr />
            <div className="mt-2 border-t py-2 ml-3">
              <div className="font-semibold text-lg text-gray-800">
                Đã xác nhận
              </div>
              <div className="mt-2">
                <i className="fa-solid fa-check" />
                <span className="ml-2 text-sm italic">
                  Địa chỉ email
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl  bg-white w-full items-center ">
          <div className="">
            <div className="md:grid md:grid-cols-2 border-2    hover:bg-gray-50 md:space-y-0 space-y-1 p-8   mb-3">
              <div className="border-b-2">
                <h3>Họ và tên</h3>
              </div>
              <div className="">
                <h2 className="text-gray-500 text-lg">{userProfile?.name}</h2>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 border-2   hover:bg-gray-50 md:space-y-0 space-y-1 p-8   mb-3">
              <div className="border-b-2">
                <h3>Giới tính</h3>
              </div>
              <div className="">
                <Radio.Group id='gender' name='gender' defaultValue={true} disabled={true} value={userProfile?.gender}>
                  <Radio value={true} id='male'>Nam</Radio>
                  <Radio value={false} id='female'>Nữ</Radio>
                </Radio.Group>
                <h2 className="text-gray-500 text-lg"></h2>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-8 border-b mb-3">
              <div>
                <h3>Ngày sinh</h3>


              </div>
              <div className="">
                <h2 className="text-gray-500 text-lg">{userProfile?.birthday}</h2>
              </div>

            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-8 border-b mb-3">
              <div>
                <h3>Đia chỉ Email</h3>


              </div>
              <div className="">
                <h2 className="text-gray-500 text-lg">{userProfile?.email}</h2>
              </div>

            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-8 border-b mb-3">
              <div>
                <h3>Số điện thoại</h3>


              </div>
              <div className="">
                <h2 className="text-gray-500 text-lg">{userProfile?.phone}</h2>
              </div>

            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-8 border-b mb-3">
              <div>
                <h3>Địa chỉ nhà</h3>


              </div>
              <div className="">
                <h2 className="text-gray-500 text-lg">Cybersoft cao thắng</h2>
              </div>

            </div>

            <div className="md:grid md:grid-cols-2">
              <div>

              </div>

              <div className="text-blue-300 hover:underline">

                <UpdateProfile />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
