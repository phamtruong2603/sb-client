import React from "react";
import { Button, Result } from "antd";

const Notfound: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button
        type="primary"
        onClick={() => {
          window.location.href = "/auth/login";
        }}
      >
        Back Home
      </Button>
    }
  />
);

export default Notfound;
