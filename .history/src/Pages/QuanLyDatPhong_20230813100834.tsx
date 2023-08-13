import React, { useEffect, useState } from "react";
import { RootState } from "../Reducer/configStore";
import Swal from "sweetalert2";
import { history } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { getBookingList } from "../Reducer/locationReducer";
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';


type Props = {};

const QuanLyDatPhong = (props: Props) => {
  const { userProfile } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const getBooking = async () => {
    const action: any = await getBookingList();
    dispatch(action);
  }

  
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

  ];
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

        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" />
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="text-sm leading-normal">
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Mã phòng
              </th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Ngày đến
              </th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Ngày đi
              </th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Số lượng khách
              </th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Mã người dùng
              </th>
              <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-grey-lighter">
              <td className="py-2 px-4 border-b border-grey-light">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Foto Perfil"
                  className="rounded-full h-10 w-10"
                />
              </td>
              <td className="py-2 px-4 border-b border-grey-light">
                Juan Pérez
              </td>
              <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
            </tr>
            {/* Añade más filas aquí como la anterior para cada autorización pendiente */}
            <tr className="hover:bg-grey-lighter">
              <td className="py-2 px-4 border-b border-grey-light">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Foto Perfil"
                  className="rounded-full h-10 w-10"
                />
              </td>
              <td className="py-2 px-4 border-b border-grey-light">
                María Gómez
              </td>
              <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-2 px-4 border-b border-grey-light">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Foto Perfil"
                  className="rounded-full h-10 w-10"
                />
              </td>
              <td className="py-2 px-4 border-b border-grey-light">
                Carlos López
              </td>
              <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-2 px-4 border-b border-grey-light">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Foto Perfil"
                  className="rounded-full h-10 w-10"
                />
              </td>
              <td className="py-2 px-4 border-b border-grey-light">
                Laura Torres
              </td>
              <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="py-2 px-4 border-b border-grey-light">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Foto Perfil"
                  className="rounded-full h-10 w-10"
                />
              </td>
              <td className="py-2 px-4 border-b border-grey-light">
                Ana Ramírez
              </td>
              <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
            </tr>
          </tbody>
        </table>
        {/* Botón "Ver más" para la tabla de Autorizaciones Pendientes */}
        <div className="text-right mt-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
            Thêm quản trị viên
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuanLyDatPhong;
