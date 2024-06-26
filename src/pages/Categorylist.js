import React from 'react';
import { Table } from "antd";

// copy from Dashboard.js....Enquiries.js....Bloglist......Blogcatlist.....Orders.js....Colorlist.js....Categorylist.js
const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Product",
      dataIndex: "product",
    },
    {
      title: "Status",
      dataIndex: "staus",
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      product: 32,
      staus: `London, Park Lane no. ${i}`,
    });
  }


const Categorylist = () => {
  return (
    <div>
        <h3 className="mb-4">Product Categories</h3>
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  );
};

export default Categorylist;
