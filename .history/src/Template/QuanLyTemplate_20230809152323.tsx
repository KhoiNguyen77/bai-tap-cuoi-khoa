import React from "react";
import Header from "../Layout/Header";
import { Outlet } from "react-router-dom";

type Props = {};

const QuanLyTemplate = (props: Props) => {
  return (
    <div>
      <div style={{ minHeight: "" }} className="shadow-md">
        123
      </div>
      <div className="content container mx-auto py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default QuanLyTemplate;
