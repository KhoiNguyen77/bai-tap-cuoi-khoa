import React from "react";
import { RootState, dispatchType } from "../Reducer/configStore";
import Swal from "sweetalert2";
import { history } from "../index";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteUserById,
  getAllProfileApi,
  UserProfile,
} from "../Reducer/userReducer";
import { useEffect, useState } from "react";
import { Button, Modal, Pagination, Radio, Space } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { getStoreJson } from "../util/config";
type Props = {};
interface DataType {
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

const QuanLyNguoiDung = (props: Props) => {
  const { allProfile } = useSelector((state: RootState) => state.userReducer);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
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
  // if (userProfile?.role != "ADMIN") {
  //   Swal.fire({
  //     icon: "warning",
  //     text: `Vui lòng đăng nhập bằng tài khoản Admin để tiếp tuc`,
  //     confirmButtonText: "OK"
  //   }).then((res) => {
  //     if (res['isConfirmed']) {
  //       history.push('/dang-nhap');
  //     }
  //   });
  // }
  const dispatch: dispatchType = useDispatch();
  const getAllProfile = async () => {
    const action = await getAllProfileApi();
    dispatch(action);
  };
  const deleteUser = async (id: number) => {
    const action: any = await deleteUserById(id);
    dispatch(action);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      align: "center",
      fixed: "left",
    },
    {
      title: "Tên",
      dataIndex: "name",
      align: "center",
      fixed: "left",
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
      fixed: "left",
    },

    {
      title: "Avatar",

      align: "center",
      dataIndex: "avatar",
      render: (_, record) => {
        return (
          <img
            src={
              record.avatar
                ? record.avatar
                : "https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
            }
            alt="Foto Perfil"
            className="rounded-full h-10 w-10"
          />
        );
      },
      fixed: "left",
    },

    {
      title: "Chức năng",
      dataIndex: "chucNang",
      align: "center",
      fixed: "left",
      render: (_, record) => (
        <Space size="middle">
          <button
            className="p-3 bg-green-300 mx-3 my-3 rounded-md hover:bg-green-500"
            // onClick={async () => {
            //   let res = await httpNonAuth.get(`/api/phong-thue/${record.id}`);
            //   setRoom(res.data.content);
            //   setDisabled(false);
            //   setOpen(true);
            //   setTitle("Sửa thông tin phòng thuê");
            // }}
          >
            Sửa
          </button>
          <button
            className="p-3 bg-red-300 mx-3 my-3 rounded-md hover:bg-red-500"
            onClick={() => {
              deleteUser(record.id);
              // console.log(record.id);
            }}
          >
            Xoá
          </button>
        </Space>
      ),
    },
  ];
  let data: DataType[] = [];

  if (getStoreJson("listUser")) {
    data = [...getStoreJson("listUser")];
  }
  useEffect(() => {
    getAllProfile();
  }, []);
  return (
    <div>
      <div className="relative  w-full ">
        <div className="flex justify-between">
          <div className="text-right ">
            {/* <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded" onClick={() => setOpen(true)}>
              Thêm quản trị viên
            </button> */}
            <Modal
              title="Thông tin cá nhân"
              centered
              open={open}
              onOk={handleOk}
              onCancel={handleCancel}
              width={1000}
              footer={[]}
            >
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
                    />
                    {/* <span className="text-red-500">{updateMik.errors.name}</span> */}
                  </div>

                  <div className="mb-3">
                    <label
                      className="block text-gray-400 text-sm font-medium mb-2"
                      htmlFor="gender"
                    >
                      {" "}
                      giới tính{" "}
                    </label>
                    <Radio.Group id="gender" name="gender">
                      <Radio value={true} id="male">
                        Male
                      </Radio>
                      <Radio value={false} id="female">
                        Female
                      </Radio>
                    </Radio.Group>
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
                    />
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
                    />
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
                      className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-red-500 items-end  hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                >
                  Thêm admin
                </button>
              </div>
            </Modal>
          </div>
        </div>
        <table className="w-full table-auto text-sm mt-4">
          <tbody>
            <Table columns={columns} dataSource={data} bordered />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuanLyNguoiDung;
