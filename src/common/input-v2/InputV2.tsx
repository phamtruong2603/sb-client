import { Input, InputNumber, Space } from "antd";
import { FC, InputHTMLAttributes } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import "./index.css";
import ErrorMessage from "../messages/ErrorMessage";

interface InputV2Props extends InputHTMLAttributes<HTMLInputElement> {
  formControl: UseFormReturn<any>;
  label?: string;
  name: string;
  type: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  // status?: "vertical" | "error" | "warning" | undefined;

  rowsTextarea?: number;
}

const InputV2: FC<InputV2Props> = (props) => {
  const {
    formControl,
    label,
    name,
    type = "text",
    required = false,
    disabled = false,
    placeholder = "",
    className,

    min,
    max,
    defaultValue,
    // status = undefined,

    rowsTextarea = 2,
  } = props;
  const {
    control,
    formState: { errors },
    trigger,
  } = formControl;

  const errorMessage = errors[name]?.message;
  const handelErrorMessage = !!errors[name]?.type;

  return (
    <div className={`input-v2-container ${className}`}>
      <Space className="input-v2-label">
        {label}
        {required && <span style={{ color: "red" }}>*</span>}
      </Space>
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

            {type === "number" && (
              <InputNumber
                style={{ width: "100%" }}
                min={min}
                max={max}
                defaultValue={defaultValue}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                // status={status}
              />
            )}

            {type === "textarea" && (
              <Input.TextArea
                rows={rowsTextarea}
                name={name}
                disabled={disabled}
                placeholder={placeholder}
                onBlur={onBlur}
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
    </div>
  );
};

export default InputV2;
