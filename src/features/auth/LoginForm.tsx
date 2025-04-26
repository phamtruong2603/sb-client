import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "antd";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import ButtonV2 from "../../common/button-v2/ButtonV2";
import FormItemV2 from "../../common/input-v2/FormItemV2";
import { AppDispatch } from "../../redux/store";
import { loginDispatch } from "../../redux/user/userActions";
import "./auth.css";
import { RootState } from "../../redux/rootReducer";
import { toastCustom } from "../../common/messages/toastCustom";
import { toast, ToastContainer } from "react-toastify";

const schema = yup.object({
  username: yup
    .string()
    .required("Tên đăng nhập là bắt buộc!")
    .min(6, "Tên đăng nhập phải có ít nhất 6 ký tự!")
    .max(20, "Tên đăng nhập không được quá 20 ký tự!"),
  password: yup
    .string()
    .required("Mật khẩu là bắt buộc!")
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự!")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[^\s]+$/,
      "Mật khẩu phải chứa cả chữ và số!"
    ),
});

const LoginForm: React.FC = () => {
  const formControl = useForm<any>({
    defaultValues: {
      username: "username5",
      password: "password5",
    },
    resolver: yupResolver(schema),
  });

  const dispatch: AppDispatch = useDispatch();
  const { user, loading, error } = useSelector((state: RootState) => state.user);

  const { handleSubmit } = formControl;

  const onSubmit = async (data: any) => {
    const { username, password } = data;
    dispatch(loginDispatch({ username, password }));
  };

  useEffect(() => {
    if (user) {
      toastCustom({message: "Đăng nhập thành công!", type: "success" });
    }
  }, [user]);

  return (
    <div className="login-form">
      <h1>Đăng nhập</h1>
      <Form
        name="loginForm"
        onFinish={handleSubmit(onSubmit)}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
      >
        <FormItemV2
          formControl={formControl}
          label="Username"
          name="username"
          type="text"
          required={true}
          placeholder="Nhập username của bạn"
        />
        <FormItemV2
          formControl={formControl}
          label="Password"
          name="password"
          type="password"
          required={true}
          placeholder="Nhập password của bạn"
        />
        <div className="forgot-password">
          <a href="/forgot-password">Quên mật khẩu?</a>
        </div>
        <ButtonV2 label="Đăng nhập" type="primary" htmlType="submit" />
      </Form>
      <div className="register-link">
        <a href="/auth/register">Đăng ký tài khoản mới</a>
      </div>
    </div>
  );
};

export default LoginForm;
