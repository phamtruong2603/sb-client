import { Form, Input } from "antd";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import ErrorMessage from "../messages/ErrorMessage";

interface FormItemProps {
  formControl: UseFormReturn<any>;
  label?: string;
  name: string;
  type: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

const FormItemV2: React.FC<FormItemProps> = (props) => {
  const {
    formControl,
    label,
    name,
    type = "text",
    required = false,
    disabled = false,
    placeholder = "",
    className,
  } = props;

  const {
    control,
    formState: { errors },
    trigger,
  } = formControl;

  const errorMessage = errors[name]?.message;
  const handelErrorMessage = !!errors[name]?.type;

  return (
    <Form.Item<any>
      className={`${className}`}
      label={label}
      name={name}
      required={required}
    >
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            {type === "text" && (
              <Input
                name={name}
                disabled={disabled}
                placeholder={placeholder}
                onBlur={(e) => {
                  trigger(name);
                }}
                onChange={onChange}
                value={value}
              />
            )}

            {type === "password" && (
              <Input.Password
                name={name}
                disabled={disabled}
                placeholder={placeholder}
                onBlur={(e) => {
                  trigger(name);
                }}
                onChange={onChange}
                value={value}
              />
            )}
          </>
        )}
      />
      <ErrorMessage validate={handelErrorMessage} message={`${errorMessage}`} />
    </Form.Item>
  );
};

export default FormItemV2;
