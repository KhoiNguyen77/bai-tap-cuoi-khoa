import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Reducer/configStore";
import { Room, deleteRoomById, getRoomAPI } from "../Reducer/locationReducer";
import { Modal, Radio } from "antd";

type Props = {};

const QuanLyPhong = (props: Props) => {
  const { rooms } = useSelector((state: RootState) => state.locationReducer);
  const [title, setTitle] = useState("Thông tin phòng thuê");
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const [disabled, setDisabled] = useState(false);
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
  const deleteRoom = async (id:number) => {
    const action: any = await deleteRoomById(id);
    dispatch(action);
  }
  const openModalById = (id: number, open: boolean, isDisabled: boolean, title: string) => {
    const index = rooms?.findIndex(room => room.id == id)
    return <Modal
      title= {title}
      centered
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      footer={[]}
    >
      <form>
        <div className="container mx-auto grid sm:grid-cols-2 gap-4 mt-9">
          <div className="mb-4 w-full">
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
              >
                Mã phòng
              </label>
              <input
                className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                id="id"
                name="id"
                type="text"
                value={rooms[index]?.id}
                disabled = {isDisabled}
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
                
              >
                Tên phòng
              </label>
              <input
                className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                id="tenPhong"
                type="text"
                value={rooms[index]?.tenPhong}
                disabled = {isDisabled}
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
                
              >
                Số lượng khách
              </label>

              <input
                className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                id="khach"
                value={rooms[index]?.khach}
                disabled = {isDisabled}
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
                
              >
                Số lượng phòng ngủ
              </label>

              <input
                className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                id="phongNgu"
                type="number"
                value={rooms[index]?.phongNgu}
                disabled = {isDisabled}
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
                
              >
                Số lượng giường
              </label>

              <input
                className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                id="giuong"
                type="number"
                value={rooms[index]?.giuong}
                disabled = {isDisabled}
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
                
              >
                Số lượng phòng tắm
              </label>

              <input
                className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                id="phongTam"
                type="number"
                value={rooms[index]?.phongTam}
                disabled = {isDisabled}
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
              >
                Mô tả
              </label>

              <input
                className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                id="moTa"
                type="text"
                value={rooms[index]?.moTa}
                disabled = {isDisabled}
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
                
              >
                Giá tiền
              </label>

              <input
                className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                id="giaTien"
                type="number"
                value={rooms[index]?.giaTien}
                disabled = {isDisabled}
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
              >
                Hình ảnh
              </label>

              <input
                className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                id="hinhAnh"
                value={rooms[index]?.hinhAnh}
                disabled = {isDisabled}
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
              >
                Địa điểm
              </label>

              <input
                className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                id="maViTri"
                value={rooms[index]?.maViTri}
                disabled = {isDisabled}
              />
            </div>
          </div>
          <div className="mb-6 w-full ml-2">
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
                
              >
                Máy giặt
              </label>

              <Radio.Group id="mayGiat" name="mayGiat" value={rooms[index]?.mayGiat} disabled = {isDisabled}>
                <Radio value={true} id="yes" className="mr-20">
                  Có
                </Radio>
                <Radio value={false} id="no">
                  không có
                </Radio>
              </Radio.Group>
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
              >
                Bàn là
              </label>

              <Radio.Group id="banLa" name="banLa" value={rooms[index]?.banLa} disabled = {isDisabled}>
                <Radio value={true} id="yes" className="mr-20">
                  Có
                </Radio>
                <Radio value={false} id="no">
                  không có
                </Radio>
              </Radio.Group>
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
              >
                Tivi
              </label>

              <Radio.Group id="tivi" name="tivi" disabled = {isDisabled}>
                <Radio value={true} id="yes" className="mr-20">
                  Có
                </Radio>
                <Radio value={false} id="no">
                  không có
                </Radio>
              </Radio.Group>
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
              >
                Điều hòa
              </label>

              <Radio.Group id="dieuHoa" name="dieuHoa" value={rooms[index]?.dieuHoa} disabled = {isDisabled}>
                <Radio value={true} id="yes" className="mr-20">
                  Có
                </Radio>
                <Radio value={false} id="no">
                  không có
                </Radio>
              </Radio.Group>
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
              >
                Wifi
              </label>

              <Radio.Group id="wifi" name="wifi" value={rooms[index]?.wifi} disabled = {isDisabled}>
                <Radio value={true} id="yes" className="mr-20">
                  Có
                </Radio>
                <Radio value={false} id="no">
                  không có
                </Radio>
              </Radio.Group>
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
              >
                Bếp
              </label>

              <Radio.Group id="bep" name="bep" value={rooms[index]?.bep} disabled = {isDisabled}>
                <Radio value={true} id="yes" className="mr-20">
                  Có
                </Radio>
                <Radio value={false} id="no">
                  không có
                </Radio>
              </Radio.Group>
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
              >
                Bãi đổ xe
              </label>

              <Radio.Group id="doXe" name="doXe" value={rooms[index]?.doXe} disabled = {isDisabled}>
                <Radio value={true} id="yes" className="mr-20">
                  Có
                </Radio>
                <Radio value={false} id="no">
                  không có
                </Radio>
              </Radio.Group>
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
              >
                Hồ bơi
              </label>

              <Radio.Group id="hoBoi" name="hoBoi" value={rooms[index]?.hoBoi} disabled = {isDisabled}>
                <Radio value={true} id="yes" className="mr-20">
                  Có
                </Radio>
                <Radio value={false} id="no">
                  không có
                </Radio>
              </Radio.Group>
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-2"
              >
                Bàn ủi
              </label>

              <Radio.Group id="banUi" name="banUi" value={rooms[index]?.banUi} disabled = {isDisabled}>
                <Radio value={true} id="yes" className="mr-20">
                  Có
                </Radio>
                <Radio value={false} id="no">
                  không có
                </Radio>
              </Radio.Group>
            </div>

          </div>
          { !isDisabled && <button
            type="submit"
            className="bg-red-500 items-end  hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
          >
            Sửa thông tin
          </button>}

        </div>
      </form>
    </Modal>
  }
  useEffect(() => {
    getRoom();
  }, []);
  return (
    <div>
      <div className="relative max-w-md w-full">
      </div>
      <div className="mt-2  bg-white p-4 shadow rounded-lg">
        <div className="header flex justify-between items-center">
        <h2 className="text-gray-500 text-lg font-semibold pb-4">
          Thông tin người dùng
        </h2>
        <button className="p-3 rounded-lg bg-blue-400 text-white text-center">Thêm phòng thuê mới</button>
        </div>
        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6 mt-3" />
        <table className="w-full table-auto text-sm" style={{overflowY: "scroll"}}>
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
                      <button
                        className="p-3 bg-blue-300 mx-3 my-3 rounded-md hover:bg-blue-500"
                        onClick={() => {                          
                          setOpen(true);
                          setId(room.id);
                          setDisabled(true);
                          setTitle("Thông tin phòng thuê")
                        }}
                      >
                        Xem
                      </button>
                      <button
                        className="p-3 bg-green-300 mx-3 my-3 rounded-md hover:bg-green-500"
                        onClick={() => {
                          setOpen(true);
                          setId(room.id);
                          setDisabled(false);
                          setTitle("Chỉnh sửa thông tin phòng thuê")
                        }}
                      >
                        Sửa
                      </button>
                      <button className="p-3 bg-red-300 mx-3 my-3 rounded-md hover:bg-red-500" onClick={()=> {
                        deleteRoom(room.id)
                      }}>
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
          {openModalById(id,open, disabled, title)}
        </table>
      </div>
    </div>
  );
};

export default QuanLyPhong;
