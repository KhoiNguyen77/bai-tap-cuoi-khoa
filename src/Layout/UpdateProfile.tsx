import { Button, Modal, Radio } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, dispatchType } from "../Reducer/configStore";
import { USER_LOGIN, USER_PROFILE, getStoreJson } from "../util/config";
import { useFormik } from "formik";
import * as yup from "yup";
import { updateProfileApi } from "../Reducer/userReducer";
import { NavLink, useParams } from "react-router-dom";

type Props = {};
export interface formUpdate {
  id: number;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
}
const UpdateProfile = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  // let { userUpdate } = useSelector((state: RootState) => state.userReducer);
  const profile = getStoreJson(USER_PROFILE);
  // userUpdate = { ...profile }
  const dispatch: dispatchType = useDispatch();
  const { id } = useParams();
  const updateMik = useFormik<formUpdate>({
    initialValues: {
      id: profile?.id,
      email: profile?.email,
      name: profile?.name,
      gender: profile?.gender,
      phone: profile?.phone,
      birthday: profile?.birthday,
      role: profile?.role,
    },
    onSubmit: async (values: formUpdate) => {
      const action = await updateProfileApi(values);
      dispatch(action);
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email can't be blank !")
        .email("Email is not valid !"),
      name: yup.string().required("Name can't be blank"),
      gender: yup.string().required("Please select your gender !"),
      phone: yup
        .string()
        .required("Phonenumber can't be blank !")
        .max(10, "Phonenumber can only have 10 numbers"),
    }),
  });
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
        onClick={() => setOpen(true)}
      >
        Thay đổi thông tin
      </button>

      <Modal
        title="Thông tin cá nhân"
        centered
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        footer={[]}
      >
        <form onSubmit={updateMik.handleSubmit}>
          <div className="container mx-auto px-10 grid sm:grid-cols-2 gap-4 mt-9">
            <div className="mb-4 w-full">
              <div className="mb-3">
                <label
                  className="block text-gray-400 text-sm font-medium mb-2"
                  htmlFor="username"
                >
                  {" "}
                  Tên người dùng
                </label>

                <input
                  className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                     "
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Điền tên người dùng"
                  defaultValue={profile?.name}
                  onChange={updateMik.handleChange}
                />
                <span className="text-red-500">{updateMik.errors.name}</span>
              </div>

              <div className="mb-3">
                <label
                  className="block text-gray-400 text-sm font-medium mb-2"
                  htmlFor="gender"
                >
                  {" "}
                  giới tính{" "}
                </label>
                <Radio.Group
                  id="gender"
                  name="gender"
                  defaultValue={profile?.gender}
                  onChange={updateMik.handleChange}
                >
                  <Radio value={true} id="male">
                    Male
                  </Radio>
                  <Radio value={false} id="female">
                    Female
                  </Radio>
                </Radio.Group>
                <span className="text-red-500">{updateMik.errors.gender}</span>
              </div>
              <div className="mb-3">
                <label
                  className="block text-gray-400 text-sm font-medium mb-2"
                  htmlFor="sdt"
                >
                  {" "}
                  Số điện thoại{" "}
                </label>

                <input
                  className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                     "
                  id="phone"
                  type="number"
                  placeholder="Điền số điện thoại"
                  defaultValue={profile?.phone}
                  onChange={updateMik.handleChange}
                />
                <span className="text-red-500">{updateMik.errors.phone}</span>
              </div>
            </div>
            <div className="mb-6 w-full ml-2">
              <div className="mb-3">
                <label
                  className="block text-gray-400 text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  {" "}
                  Email{" "}
                </label>

                <input
                  className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                     "
                  id="email"
                  placeholder="Email"
                  defaultValue={profile?.email}
                  onChange={updateMik.handleChange}
                />
                <span className="text-red-500">{updateMik.errors.email}</span>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="birthday"
                  className="block mb-2 text-sm font-medium text-black dark:text-gray-300"
                >
                  Ngày Sinh
                </label>
                <input
                  type="date"
                  id="birthday"
                  defaultValue={profile?.birthday}
                  onChange={updateMik.handleChange}
                  className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-red-500 items-end  hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
            >
              Sửa thông tin
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default UpdateProfile;
