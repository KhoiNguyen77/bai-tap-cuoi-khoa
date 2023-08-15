import React, { useEffect, useState } from "react";
import { RootState } from "../Reducer/configStore";
import Swal from "sweetalert2";
import { history } from "../index";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBookingById,
  getBookingList,
  updateBookingById,
} from "../Reducer/locationReducer";
import {
  Button,
  Table,
  Space,
  Radio,
  Modal,
  DatePicker,
  DatePickerProps,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { getStoreJson, httpNonAuth } from "../util/config";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";

type Props = {};

interface DataType {
  id: number;
  maPhong: number;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: number;
  maNguoiDung: number;
}
let data: DataType[] = [];

const QuanLyDatPhong: React.FC = (props: Props) => {
  if (getStoreJson("bookingList")) {
    data = [...getStoreJson("bookingList")];
  }
  data.forEach((row) => {
    const convertStringNgayDen = new Date(row.ngayDen);
    const convertStringNgayDi = new Date(row.ngayDi);
    row.ngayDen = `${convertStringNgayDen.getDate()}/${
      convertStringNgayDen.getMonth() + 1
    }/${convertStringNgayDen.getFullYear()}`;
    row.ngayDi = `${convertStringNgayDi.getDate()}/${
      convertStringNgayDi.getMonth() + 1
    }/${convertStringNgayDi.getFullYear()}`;
  });

  useEffect(() => {
    getBooking();
  }, []);
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
  const { bookingList } = useSelector(
    (state: RootState) => state.locationReducer
  );
  const dispatch = useDispatch();
  const getBooking = async () => {
    const action: any = await getBookingList();
    dispatch(action);
  };

  const deleteBooking = async (id: number) => {
    const action: any = await deleteBookingById(id);
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
      title: "Mã phòng",
      dataIndex: "maPhong",
      align: "center",
      fixed: "left",
    },
    {
      title: "Ngày đến",
      dataIndex: "ngayDen",
      align: "center",
      fixed: "left",
    },
    {
      title: "Ngày đi",
      dataIndex: "ngayDi",
      align: "center",
      fixed: "left",
    },
    {
      title: "Số lượng khách",
      dataIndex: "soLuongKhach",
      align: "center",
      fixed: "left",
    },
    {
      title: "Đặt bởi",
      dataIndex: "maNguoiDung",
      align: "center",
      fixed: "left",
    },
    {
      title: "Chức năng",
      dataIndex: "chucNang",
      align: "center",

      render: (_, record) => (
        <Space size="middle">
          <button
            className="p-3 bg-blue-300 mx-3 my-3 rounded-md hover:bg-blue-500"
            onClick={async () => {
              let res = await httpNonAuth.get(`/api/dat-phong/${record.id}`);
              console.log(res.data.content);
              setBooking(res.data.content);
              setDisabled(true);
              setOpen(true);
              setTitle("Thông tin đặt phòng");
            }}
          >
            Xem
          </button>
          <button
            className="p-3 bg-green-300 mx-3 my-3 rounded-md hover:bg-green-500"
            onClick={async () => {
              let res = await httpNonAuth.get(`/api/dat-phong/${record.id}`);
              setBooking(res.data.content);
              setDisabled(false);
              setOpen(true);
              setTitle("Sửa thông tin đặt phòng");
            }}
          >
            Sửa
          </button>
          <button
            className="p-3 bg-red-300 mx-3 my-3 rounded-md hover:bg-red-500"
            onClick={() => {
              deleteBooking(record.id);
            }}
          >
            Xoá
          </button>
        </Space>
      ),
    },
  ];
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Thông tin phòng thuê");
  const [booking, setBooking] = useState<DataType>();
  const handleCancel = () => {
    setOpen(false);
  };
  const { register, handleSubmit } = useForm();
  const handleChange = (e: any) => {
    let { name, value } = e.target;
    setBooking((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onChangeNgayDen: DatePickerProps["onChange"] = (date) => {
    setBooking((prev: any) => ({
      ...prev,
      ngayDen: date
    }));
  };

  const onChangeNgayDi: DatePickerProps["onChange"] = (date) => {
    setBooking((prev: any) => ({
      ...prev,
      ngayDi: date
    }));
  };
  const onSubmit = async (values: any) => {
    let dataBack: any = { ...booking };
    const action: any = await updateBookingById(dataBack);
    dispatch(action);
    setOpen(false);
  };
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
      <div className="mt-8 bg-white p-4 shadow rounded-lg w-full">
        <h2 className="text-gray-500 text-lg font-semibold pb-4">
          Thông tin người dùng
        </h2>
        <Table columns={columns} dataSource={data} bordered />
        <div>
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="container mx-auto grid sm:grid-cols-2 gap-4 mt-9">
                <div className="mb-4 w-full">
                  <div className="mb-3">
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Mã phòng
                    </label>
                    <input
                      className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                      id="maPhong"
                      name="maPhong"
                      type="text"
                      value={booking?.maPhong}
                      disabled
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
                      id="soLuongKhach"
                      name="soLuongKhach"
                      type="number"
                      value={booking?.soLuongKhach}
                      disabled={disabled}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Đặt bởi
                    </label>

                    <input
                      className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                 "
                      id="maNguoiDung"
                      type="number"
                      name="maNguoiDung"
                      value={booking?.maNguoiDung}
                      disabled
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-6 w-full ml-2">
                  <div className="mb-3">
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Ngày đến
                    </label>
                    <DatePicker
                      value={dayjs(booking?.ngayDen)}
                      style={{ width: 200 }}
                      placeholder="dd/MM/YYYY"
                      bordered={true}
                      format={"DD/MM/YYYY"}
                      className="inline-block p-3 w-full mx-auto"
                      disabled={disabled}
                      {...register("ngayDen")}
                      onChange={onChangeNgayDen}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Ngày đi
                    </label>

                    <DatePicker
                      value={dayjs(booking?.ngayDi)}
                      style={{ width: 200 }}
                      placeholder="dd/MM/YYYY"
                      bordered={true}
                      format={"DD/MM/YYYY"}
                      className="inline-block p-3 w-full mx-auto"
                      disabled={disabled}
                      {...register("ngayDi")}
                      onChange={onChangeNgayDi}
                    />
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
        <div className="text-right mt-4"></div>
      </div>
    </div>
  );
};

export default QuanLyDatPhong;
