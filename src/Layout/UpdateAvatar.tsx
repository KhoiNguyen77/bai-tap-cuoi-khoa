import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, dispatchType } from '../Reducer/configStore';
import { Button, Modal } from 'antd';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { updateAvatarApi } from '../Reducer/userReducer';
type Props = {}
interface UploadFileAvatar {
    avatar: FileList;
}
const UpdateAvatar = (props: Props) => {
    const { userProfile } = useSelector((state: RootState) => state.userReducer);
    const dispatch: dispatchType = useDispatch();
    const { register, handleSubmit } = useForm<UploadFileAvatar>({
        mode: "onSubmit",
    });
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
    const onSubmit = (values: UploadFileAvatar) => {
        let payload = {
            ...values,
            avatar: values.avatar[0],
        };
        console.log(payload.avatar);
        let formData = new FormData();
        formData.append('formFile', payload.avatar);
        console.log(formData.get('formFile'));
        const action = updateAvatarApi(formData);
        dispatch(action)
    };
    const onError = (values: any) => {
        console.log(values);
    };
    return (
        <>

            <NavLink to="" className="text-gray-500 underline hover:text-blue-700 " onClick={() => setOpen(true)}>
                Cập nhật hình ảnh
            </NavLink>
            <Modal
                title=" Cập nhật ảnh đại diện"
                centered
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}

                footer={[

                ]}

            >
                <form className="" onSubmit={handleSubmit(onSubmit, onError)}    >

                    <input
                        type="file"
                        placeholder="Upload ảnh"
                        className="border p-2"
                        {...register("avatar")}
                    />
                    <div className="border-t mt-5 flex items-center justify-end">
                        <button
                            className="block bg-gray-400 hover:bg-gray-500 duration-150 px-3 py-2 mt-3  mr-3"

                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            className="block bg-blue-700 hover:bg-blue-600 duration-150 px-3 py-2 mt-3 text-white"
                        >
                            Sửa ảnh
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default UpdateAvatar
