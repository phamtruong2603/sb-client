import React from "react";
import "./auth.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputV2 from "../../common/input-v2/InputV2";
import ButtonV2 from "../../common/button-v2/ButtonV2";

const schema = yup.object({
  email: yup
    .string()
    .required("Email bắt buộc nhập!")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email không đúng định dạng!"),
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Mật khẩu không khớp!")
    .required("Vui lòng xác nhận mật khẩu"),
});

const RegisterForm: React.FC = () => {
  const formControl = useForm<any>({
    defaultValues: {
      email: undefined,
      usname: undefined,
      password: undefined,
      confirmPassword: undefined,
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = formControl;

  const onSubmit = (data: any) => {
    console.log("register data", data);
  };

  return (
    <div className="register-form">
      <h1>Đăng ký tài khoản</h1>
      <p>Điền thông tin bên dưới để tạo tài khoản.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputV2
          formControl={formControl}
          label="Email"
          name="email"
          type="text"
          required={true}
          placeholder="Nhập thông tin email"
        />
        <InputV2
          formControl={formControl}
          label="Tên đăng nhập"
          name="username"
          type="text"
          required={true}
          placeholder="Nhập tên đăng nhập"
        />
        <InputV2
          formControl={formControl}
          label="Mật khẩu"
          name="password"
          type="password"
          required={true}
          placeholder="Nhập mật khẩu"
        />
        <InputV2
          formControl={formControl}
          label="Xác nhận mật khẩu"
          name="confirmPassword"
          type="password"
          required={true}
          placeholder="Nhập lại mật khẩu"
        />
        <ButtonV2
          htmlType="submit"
          label="Đăng ký"
          type="primary"
          onClick={() => {}}
        />
      </form>
      <p className="login-link">
        Đã có tài khoản? <a href="/login">Đăng nhập</a>
      </p>
    </div>
  );
};

export default RegisterForm;
