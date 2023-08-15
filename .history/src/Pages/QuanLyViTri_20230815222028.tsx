import React from "react";
import { RootState, dispatchType } from "../Reducer/configStore";
import Swal from "sweetalert2";
import { history } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Button, Modal, Pagination, Radio, Space } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { getStoreJson } from "../util/config";
type Props = {};
interface DataType {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh: string;
}

const QuanLyViTri = (props: Props) => {
  const { userProfile } = useSelector((state: RootState) => state.userReducer);
  const dispatch: dispatchType = useDispatch();
  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      align: "center",
      fixed: "left",
    },
    {
      title: "Tên vị trí",
      dataIndex: "tenViTri",
      align: "center",
      fixed: "left",
    },
    {
      title: "Tỉnh Thành",
      dataIndex: "tinhThanh",
      align: "center",
      fixed: "left",
    },
    {
      title: "Quốc Gía",
      dataIndex: "quocGia",
      align: "center",
      fixed: "left",
    },
    {
      title: "Hình ảnh",

      align: "center",
      dataIndex: "hinhAnh",
      render: (_, record) => {
        return (
          <img
            src={
              record.hinhAnh
                ? record.hinhAnh
                : "https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
            }
            alt="Foto Perfil"
            className="rounded-sm  h-20  w-20"
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
              // deleteUser(record.id);
            }}
          >
            Xoá
          </button>
        </Space>
      ),
    },
  ];
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
  let data: DataType[] = [];

  if (getStoreJson("location")) {
    data = [...getStoreJson("location")];
  }
  return (
    <div>
      <table className="w-full table-auto text-sm mt-4">
        <tbody>
          <Table columns={columns} dataSource={data} bordered />
        </tbody>
      </table>
    </div>
  );
};

export default QuanLyViTri;
