import React, { useEffect, useState } from "react";
import { RootState } from "../Reducer/configStore";
import Swal from "sweetalert2";
import { history } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { getBookingList } from "../Reducer/locationReducer";
import { Button, Table, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getStoreJson } from "../util/config";
import { log } from "console";


type Props = {};

const QuanLyDatPhong: React.FC = (props: Props) => {
  const { userProfile } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const getBooking = async () => {
    const action: any = await getBookingList();
    dispatch(action);
  }
  const data: DataType[] = getStoreJson("bookingList");
  console.log(data);
  
  
  if (userProfile?.role != "ADMIN") {
    Swal.fire({
      icon: "warning",
      text: `Vui lòng đăng nhập bằng tài khoản Admin để tiếp tuc`,
      confirmButtonText: "OK"
    }).then((res) => {
      if (res['isConfirmed']){
        history.push('/dang-nhap');
      }
    });
  }
  interface DataType {
    id: React.Key
    maPhong: number,
    ngayDen: string,
    ngayDi: string,
    soluongKhach: number,
    maNguoiDung: number
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Mã phòng',
      dataIndex: 'maPhong',
    },
    {
      title: 'Ngày đến',
      dataIndex: 'ngayDen',
    },
    {
      title: 'Ngày đi',
      dataIndex: 'ngayDi',
    },
    {
      title: 'Số lượng khách',
      dataIndex: 'soLuongKhach',
    },
    {
      title: 'Đặt bởi',
      dataIndex: 'maNguoiDung',
    },
    {
      title: 'Chức năng',
      dataIndex: 'chucNang',
      render: (_, record) => (
        <Space size="middle">
         <button className="p-3 bg-blue-300 mx-3 my-3 rounded-md hover:bg-blue-500">Xem</button>
         <button className="p-3 bg-green-300 mx-3 my-3 rounded-md hover:bg-green-500">Sửa</button>
         <button className="p-3 bg-red-300 mx-3 my-3 rounded-md hover:bg-red-500">Xoá</button>
        </Space>
      ),
    },
  ];
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const hasSelected = selectedRowKeys.length > 0;

  useEffect(()=> {
    getBooking();
  })
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
        <div style={{ marginBottom: 16 }}>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table scroll={{y: 1000}} columns={columns} dataSource={data} />
        <div>
    </div>
        <div className="text-right mt-4">
        </div>
      </div>
    </div>
  );
};

export default QuanLyDatPhong;
