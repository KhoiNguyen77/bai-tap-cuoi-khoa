import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Reducer/configStore";
import { Room, getRoomAPI } from "../Reducer/locationReducer";
import { Modal } from "antd";

type Props = {};

const QuanLyPhong = (props: Props) => {
  const { rooms } = useSelector((state: RootState) => state.locationReducer);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const getRoom = async () => {
    const action: any = await getRoomAPI();
    dispatch(action);
  };
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
  useEffect(() => {
    getRoom();
  }, []);
  return (
    <div>
      <div className="relative max-w-md w-full">
        <div className="absolute top-1 left-2 inline-flex items-center p-2">
          <i className="fas fa-search text-gray-400" />
        </div>
        <input
          className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
          type="search"
          placeholder="Tìm..."
        />
      </div>
      <div className="mt-8 bg-white p-4 shadow rounded-lg">
        <h2 className="text-gray-500 text-lg font-semibold pb-4">
          Thông tin người dùng
        </h2>

        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" />
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="text-sm leading-normal">
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Mã phòng
              </th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Tên phòng
              </th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Giá tiền
              </th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Hình ảnh
              </th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody>
            {rooms.length > 0 &&
              rooms.map((room: Room, index: number) => {
                return (
                  <tr className="hover:bg-grey-lighter" key={index}>
                    <td className="py-2 px-4 border border-grey-light border-solid">
                      {room.id}
                    </td>
                    <td className="py-2 px-4 border border-grey-light border-solid">
                      {room.tenPhong}
                    </td>
                    <td className="py-2 px-4 border border-grey-light border-solid">
                      {room.giaTien}
                    </td>
                    <td className="py-2 px-4 border border-grey-light border-solid">
                      <img src={room.hinhAnh} alt="" width={200} height={200} />
                    </td>
                    <td className="py-2 px-4 border border-grey-light border-solid text-center">
                      <button className="p-3 bg-blue-300 mx-3 my-3 rounded-md hover:bg-blue-500" onClick={() => setOpen(true)}>
                        Xem
                      </button>
                      <button className="p-3 bg-green-300 mx-3 my-3 rounded-md hover:bg-green-500">
                        Sửa
                      </button>
                      <button className="p-3 bg-red-300 mx-3 my-3 rounded-md hover:bg-red-500">
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/* Botón "Ver más" para la tabla de Autorizaciones Pendientes */}
        <Modal
          title="Thông tin cá nhân"
          centered
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}
          footer={[]}
        >
          <form>
            <div className="container mx-auto px-10 grid sm:grid-cols-2 gap-4 mt-9">
              <div className="mb-4 w-full">
                <div className="mb-3">
                  <label
                    className="block text-gray-400 text-sm font-medium mb-2"
                    htmlFor="username"
                  >
                    {" "}
                    Mã phòng
                  </label>
                  <input
                    className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                     "
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Điền tên người dùng"
                  />
                </div>

                <div className="mb-3">
                  <label
                    className="block text-gray-400 text-sm font-medium mb-2"
                    htmlFor="gender"
                  >
                    Tên phòng
                  </label>
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
                    placeholder="Email"
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
                Sửa thông tin
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default QuanLyPhong;
