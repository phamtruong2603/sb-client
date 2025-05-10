import { Button } from "antd";
import React from "react";

interface ButtonV2Props {
  label: string | React.ReactNode;
  type?: "primary" | "default" | "dashed" | "text" | "link";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  htmlType?: "button" | "submit" | "reset" | undefined;
  size?: "small" | "middle" | "large";
  loading?: boolean;
}

const ButtonV2: React.FC<ButtonV2Props> = (props) => {
  const {
    label,
    type = "primary",
    onClick,
    disabled,
    className,
    htmlType,
    size = "middle",
    loading = false,
  } = props;

  return (
    <Button
      htmlType={htmlType}
      className={`button-v2 ${className}`}
      onClick={onClick}
      type={type}
      size={size}
      loading={loading}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default ButtonV2;
