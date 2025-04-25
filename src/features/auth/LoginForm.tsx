import React from "react";
import { Form } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import FormItemV2 from "../../common/input-v2/FormItemV2";
import ButtonV2 from "../../common/button-v2/ButtonV2";
import './auth.css';
import { axiosApi } from "../../api/axios";
import { login } from "./auth.service";

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
      username: 'username5',
      password: 'password5',
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = formControl;

  const onSubmit = async (data: any) => {
    const { username, password } = data;

    const res = await login({username, password});
    // lưu lại token vào localStorage
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  };

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
        <ButtonV2
          label="Đăng nhập"
          type="primary"
          htmlType="submit"
        />
      </Form>
      <div className="register-link">
        <a href="/auth/register">Đăng ký tài khoản mới</a>
      </div>
    </div>
  );
};

export default LoginForm;
