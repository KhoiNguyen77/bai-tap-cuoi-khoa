import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Reducer/configStore";
import { Room, deleteRoomById, getRoomAPI } from "../Reducer/locationReducer";
import { Button, Modal, Radio, Space, Table } from "antd";
import Swal from "sweetalert2";
import { history } from "../index";
import { ColumnsType } from "antd/es/table";
import { getStoreJson, httpNonAuth } from "../util/config";

type Props = {};
interface DataType {
  id: number;
  tenPhong: string;
  khach: number;
  phongNgu: number;
  giuong: number;
  phongTam: number;
  moTa: string;
  giaTien: number;
  mayGiat: boolean;
  banLa: boolean;
  tivi: boolean;
  dieuHoa: boolean;
  wifi: boolean;
  bep: boolean;
  doXe: boolean;
  hoBoi: boolean;
  banUi: boolean;
  maViTri: number;
  hinhAnh: string;
}

const QuanLyPhong = (props: Props) => {
  const { userProfile } = useSelector((state: RootState) => state.userReducer);
  if (userProfile?.role != "ADMIN") {
    Swal.fire({
      icon: "warning",
      text: `Vui lòng đăng nhập bằng tài khoản Admin để tiếp tuc`,
      confirmButtonText: "OK",
    }).then((res) => {
      if (res["isConfirmed"]) {
        history.push("/dang-nhap");
      }
    });
  }
  // const { rooms } = useSelector((state: RootState) => state.locationReducer);
  const [room, setRoom] = useState<DataType>();
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
  const handleChange = (e: any) => {
    console.log(e.target.value);
  };
  const deleteRoom = async (id: number) => {
    const action: any = await deleteRoomById(id);
    dispatch(action);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Mã phòng",
      dataIndex: "id",
      align: "center",
      fixed: "left",
    },
    {
      title: "Tên phòng",
      dataIndex: "tenPhong",
      align: "center",
      fixed: "left",
    },
    {
      title: "Giá tiền",
      dataIndex: "giaTien",
      align: "center",
      fixed: "left",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      align: "center",
      render: (_, record) => {
        return <img src={record.hinhAnh} alt="" width={300} height={500} />;
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
            className="p-3 bg-blue-300 mx-3 my-3 rounded-md hover:bg-blue-500"
            onClick={async () => {
              let res = await httpNonAuth.get(`/api/phong-thue/${record.id}`);
              setRoom(res.data.content);
              setDisabled(true);
              setOpen(true);
              setTitle("Thông tin phòng thuê");
            }}
          >
            Xem
          </button>
          <button
            className="p-3 bg-green-300 mx-3 my-3 rounded-md hover:bg-green-500"
            onClick={async () => {
              let res = await httpNonAuth.get(`/api/phong-thue/${record.id}`);
              setRoom(res.data.content);
              setDisabled(false);
              setOpen(true);
              setTitle("Sửa thông tin phòng thuê");
            }}
          >
            Sửa
          </button>
          <button
            className="p-3 bg-red-300 mx-3 my-3 rounded-md hover:bg-red-500"
            onClick={() => {
              deleteRoom(record.id);
            }}
          >
            Xoá
          </button>
        </Space>
      ),
    },
  ];
  let data: DataType[] = [];
  if (getStoreJson("rooms")) {
    data = [...getStoreJson("rooms")];
  }
  useEffect(() => {
    getRoom();
  }, []);
  return (
    <div>
      <div className="relative max-w-md w-full"></div>
      <div className="mt-2  bg-white p-4 shadow rounded-lg">
        <div className="header flex justify-between items-center">
          <h2 className="text-gray-500 text-lg font-semibold pb-4">
            Thông tin người dùng
          </h2>
          <button className="p-3 rounded-lg bg-blue-400 text-white text-center">
            Thêm phòng thuê mới
          </button>
        </div>
        <table className="w-full table-auto text-sm">
          <tbody>
            <Table
              columns={columns}
              dataSource={data}
              scroll={{ y: 500 }}
              bordered
            />
          </tbody>
        </table>
        <Modal
          title={title}
          centered
          okButtonProps={{
            style: {
              display: "none",
            },
          }}
          open={open}
          onCancel={handleCancel}
          width={1000}
        >
          <form>
            <div className="container mx-auto grid sm:grid-cols-2 gap-4 mt-9">
              <div className="mb-4 w-full">
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Mã phòng
                  </label>
                  <input
                    className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                    id="id"
                    name="id"
                    type="text"
                    value={room?.id}
                    disabled={disabled}

                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Tên phòng
                  </label>
                  <input
                    className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                    id="tenPhong"
                    type="text"
                    value={room?.tenPhong}
                    disabled={disabled}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Số lượng khách
                  </label>

                  <input
                    className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                    id="khach"
                    value={room?.khach}
                    disabled={disabled}
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Số lượng phòng ngủ
                  </label>

                  <input
                    className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                    id="phongNgu"
                    type="number"
                    value={room?.phongNgu}
                    disabled={disabled}
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Số lượng giường
                  </label>

                  <input
                    className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                    id="giuong"
                    type="number"
                    value={room?.giuong}
                    disabled={disabled}
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Số lượng phòng tắm
                  </label>

                  <input
                    className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                    id="phongTam"
                    type="number"
                    value={room?.phongTam}
                    disabled={disabled}
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Mô tả
                  </label>

                  <input
                    className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                    id="moTa"
                    type="text"
                    value={room?.moTa}
                    disabled={disabled}
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Giá tiền
                  </label>

                  <input
                    className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                    id="giaTien"
                    type="number"
                    value={room?.giaTien}
                    disabled={disabled}
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Hình ảnh
                  </label>
                  <input
                    className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                    type="file"
                    id="hinhAnh"
                    disabled={disabled}
                  />
                  <img src={room?.hinhAnh} width={500} alt="" />
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Địa điểm
                  </label>

                  <input
                    className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                    id="maViTri"
                    value={room?.maViTri}
                    disabled={disabled}
                  />
                </div>
              </div>
              <div className="mb-6 w-full ml-2">
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Máy giặt
                  </label>

                  <Radio.Group
                    id="mayGiat"
                    name="mayGiat"
                    value={room?.mayGiat}
                    disabled={disabled}
                  >
                    <Radio value={true} id="yes" className="mr-20">
                      Có
                    </Radio>
                    <Radio value={false} id="no">
                      không có
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Bàn là
                  </label>

                  <Radio.Group
                    id="banLa"
                    name="banLa"
                    value={room?.banLa}
                    disabled={disabled}
                  >
                    <Radio value={true} id="yes" className="mr-20">
                      Có
                    </Radio>
                    <Radio value={false} id="no">
                      không có
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Tivi
                  </label>

                  <Radio.Group
                    id="tivi"
                    name="tivi"
                    value={room?.tivi}
                    disabled={disabled}
                  >
                    <Radio value={true} id="yes" className="mr-20">
                      Có
                    </Radio>
                    <Radio value={false} id="no">
                      không có
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Điều hòa
                  </label>

                  <Radio.Group
                    id="dieuHoa"
                    name="dieuHoa"
                    value={room?.dieuHoa}
                    disabled={disabled}
                  >
                    <Radio value={true} id="yes" className="mr-20">
                      Có
                    </Radio>
                    <Radio value={false} id="no">
                      không có
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Wifi
                  </label>

                  <Radio.Group
                    id="wifi"
                    name="wifi"
                    value={room?.wifi}
                    disabled={disabled}
                  >
                    <Radio value={true} id="yes" className="mr-20">
                      Có
                    </Radio>
                    <Radio value={false} id="no">
                      không có
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Bếp
                  </label>

                  <Radio.Group
                    id="bep"
                    name="bep"
                    value={room?.bep}
                    disabled={disabled}
                  >
                    <Radio value={true} id="yes" className="mr-20">
                      Có
                    </Radio>
                    <Radio value={false} id="no">
                      không có
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Bãi đổ xe
                  </label>

                  <Radio.Group
                    id="doXe"
                    name="doXe"
                    value={room?.doXe}
                    disabled={disabled}
                  >
                    <Radio value={true} id="yes" className="mr-20">
                      Có
                    </Radio>
                    <Radio value={false} id="no">
                      không có
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Hồ bơi
                  </label>

                  <Radio.Group
                    id="hoBoi"
                    name="hoBoi"
                    value={room?.hoBoi}
                    disabled={disabled}
                  >
                    <Radio value={true} id="yes" className="mr-20">
                      Có
                    </Radio>
                    <Radio value={false} id="no">
                      không có
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="mb-3">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Bàn ủi
                  </label>

                  <Radio.Group
                    id="banUi"
                    name="banUi"
                    value={room?.banUi}
                    disabled={disabled}
                  >
                    <Radio value={true} id="yes" className="mr-20">
                      Có
                    </Radio>
                    <Radio value={false} id="no">
                      không có
                    </Radio>
                  </Radio.Group>
                </div>
              </div>
              {!disabled && (
                <button
                  type="submit"
                  className="bg-red-500 items-end  hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                >
                  Sửa thông tin
                </button>
              )}
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default QuanLyPhong;
