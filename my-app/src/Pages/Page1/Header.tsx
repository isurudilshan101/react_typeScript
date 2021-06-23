import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { Button } from "antd";

const { Search } = Input;
const { Option } = Select;

const handleChange = () => {
  console.log();
};

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = () => console.log();

const Header = () => {
  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </Space>

      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>

      <Button type="primary">Search</Button>
      <Button>+ Add New</Button>
    </div>
  );
};
export default Header;
