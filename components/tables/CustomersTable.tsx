"use client";

import {
  User,
  Phone,
  MapPin,
  ShoppingBag,
  CreditCard,
  Star,
} from "lucide-react";
import type { ColumnsType } from "antd/es/table";
import { Table, Tag, Button, Dropdown, Badge } from "antd";
import {
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  ShoppingCart,
  History,
} from "lucide-react";

interface Customer {
  key: string;
  name: string;
  contact: string;
  address: string;
  products: string;
  type: string;
  balance: number;
  loyalty?: string;
}

const handleViewCustomer = (record: Customer) => {
  console.log("View customer:", record);
};

const handleEditCustomer = (record: Customer) => {
  console.log("Edit customer:", record);
};

const handleDeleteCustomer = (record: Customer) => {
  console.log("Delete customer:", record);
};

const CustomersTable = ({ data }: { data: Customer[] }) => {
  const columns: ColumnsType<Customer> = [
    {
      title: "اسم الزبون",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <div className="flex items-center gap-2 font-medium">
          <User className="w-4 h-4 text-primary" />
          {text}
        </div>
      ),
    },
    {
      title: "رقم الهاتف",
      dataIndex: "contact",
      key: "contact",
      render: (text) => (
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-blue-500" />
          {text}
        </div>
      ),
    },
    {
      title: "العنوان",
      dataIndex: "address",
      key: "address",
      render: (text) => (
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-orange-500" />
          {text}
        </div>
      ),
    },
    {
      title: "آخر مشتريات",
      dataIndex: "products",
      key: "products",
      render: (text) => (
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-green-500" />
          {text}
        </div>
      ),
    },

    {
      title: "نوع الزبون",
      dataIndex: "type",
      key: "type",
      render: (text) => {
        let color = "";
        if (text === "زبون دائم") color = "green";
        else if (text === "زبون موسمي") color = "blue";
        else color = "orange";

        return (
          <Tag color={color} className="text-xs">
            {text}
          </Tag>
        );
      },
    },
    {
      title: "إجراءات",
      key: "action",
      align: "right",
      render: (_, record) => (
        <Dropdown
          menu={{
            items: [
              {
                key: "1",
                label: (
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-blue-500" />
                    <span>عرض التفاصيل</span>
                  </div>
                ),
                onClick: () => handleViewCustomer(record),
              },
              {
                key: "2",
                label: (
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-green-500" />
                    <span>سجل المشتريات</span>
                  </div>
                ),
              },
              {
                key: "3",
                label: (
                  <div className="flex items-center gap-2">
                    <Edit className="w-4 h-4 text-yellow-500" />
                    <span>تعديل</span>
                  </div>
                ),
                onClick: () => handleEditCustomer(record),
              },
              {
                key: "4",
                label: (
                  <div className="flex items-center gap-2">
                    <Trash2 className="w-4 h-4 text-red-500" />
                    <span>حذف</span>
                  </div>
                ),
                onClick: () => handleDeleteCustomer(record),
              },
            ],
          }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <Button type="text" icon={<MoreHorizontal className="w-4 h-4" />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        position: ["bottomCenter"],
        pageSize: 5,
        showSizeChanger: false,
        showTotal: (total, range) => (
          <p className="text-sm text-muted-foreground">
            عرض {range[0]} إلى {range[1]} من {total} زبون
          </p>
        ),
        itemRender: (current, type, originalElement) => {
          if (type === "prev") {
            return <Button size="small">السابق</Button>;
          }
          if (type === "next") {
            return <Button size="small">التالي</Button>;
          }
          return originalElement;
        },
      }}
      className="rtl-table"
    />
  );
};

export default CustomersTable;
