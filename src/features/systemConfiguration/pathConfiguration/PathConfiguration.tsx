import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import ButtonV2 from '../../../common/button-v2/ButtonV2';

const { Search } = Input;

interface DataType {
  key: string;
  name: string;
  url: string;
  parent: string;
}

const dataSource: DataType[] = [
  { key: '1', name: 'Path 1', url: '/api/path1', parent: 'Menu A' },
  { key: '2', name: 'Path 2', url: '/api/path2', parent: 'Menu B' },
  { key: '3', name: 'Path 3', url: '/api/path3', parent: 'Menu A' },
];

const columns: ColumnsType<DataType> = [
  { title: 'Tên', dataIndex: 'name', key: 'name' },
  { title: 'Đường dẫn', dataIndex: 'url', key: 'url' },
  { title: 'Menu cha', dataIndex: 'parent', key: 'parent' },
  {
    title: 'Hành động',
    key: 'action',
    align: 'right',
    width: 60,
    render: (_: unknown, record: DataType) => (
      <ButtonV2
        type="text"
        label={<EditOutlined />}
        onClick={() => alert(`Chỉnh sửa ${record.name}`)}
      />
    ),
  },
];

const PathConfiguration = () => {
  const [data, setData] = useState(dataSource);

  const onSearch = (value: string) => {
    console.log(value)
    setData(
      dataSource.filter(
        item =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.url.toLowerCase().includes(value.toLowerCase()) ||
          item.parent.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleAdd = () => {
    alert('Thêm mới');
  };

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Search
          placeholder="Tìm kiếm tên, đường dẫn hoặc menu cha"
          allowClear
          enterButton="Tìm kiếm"
          size="middle"
          onSearch={onSearch}
          style={{ width: 300 }}
        />
      </Space>
      <div style={{ marginBottom: 16 }}>
        <ButtonV2
          type="primary"
          label={
            <>
              <PlusOutlined /> Thêm mới
            </>
          }
          onClick={handleAdd}
        />
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        bordered
      />
    </div>
  );
};

export default PathConfiguration;