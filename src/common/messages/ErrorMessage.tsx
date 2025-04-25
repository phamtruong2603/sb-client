import React from "react";

interface ErrorMessageProps {
  validate?: boolean;
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { validate = false, message } = props;

  return validate ? (
    <div
      // className="ant-form-item-explain ant-form-item-explain-error"
      style={{ color: "red", fontSize: "0.8rem", textAlign: "left" }}
    >
      {message}
    </div>
  ) : null;
};

export default ErrorMessage;
