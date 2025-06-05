"use client";

import { User, Phone, MapPin, ShoppingBasket } from "lucide-react";
import type { ColumnsType } from "antd/es/table";
import { Supplier } from "@/types";
import { Table, Tag, Button, Dropdown } from "antd";

import { MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";

const handleViewSupplier = (record: Supplier) => {
  console.log("View supplier:", record);
};

const handleEditSupplier = (record: Supplier) => {
  console.log("Edit supplier:", record);
};

const handleExportSupplier = (record: Supplier) => {
  console.log("Export supplier:", record);
};

const handleDeleteSupplier = (record: Supplier) => {
  console.log("Delete supplier:", record);
};

const SuppliersTable = ({ data }: { data: Supplier[] }) => {
  const columns: ColumnsType<Supplier> = [
    {
      title: "اسم البائع",
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
      title: "الاتصال",
      dataIndex: "contact",
      key: "contact",
      render: (text) => (
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-gold" />
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
          <MapPin className="w-4 h-4 text-gold" />
          {text}
        </div>
      ),
    },
    {
      title: "المنتجات",
      dataIndex: "products",
      key: "products",
      render: (text) => (
        <div className="flex items-center gap-2">
          <ShoppingBasket className="w-4 h-4 text-gold" />
          {text}
        </div>
      ),
    },
    {
      title: "نوع البائع",
      dataIndex: "type",
      key: "type",
      render: (text) => {
        let color = "";
        if (text === "بائع دائم") color = "green";
        else if (text === "بائع موسمي") color = "orange";
        else color = "blue";

        return (
          <Tag color={color} className="text-xs">
            {text}
          </Tag>
        );
      },
    },

    {
      title: "إجراء",
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
                onClick: () => handleViewSupplier(record),
              },
              {
                key: "2",
                label: (
                  <div className="flex items-center gap-2">
                    <Edit className="w-4 h-4 text-yellow-500" />
                    <span>تعديل</span>
                  </div>
                ),
                onClick: () => handleEditSupplier(record),
              },
              {
                key: "4",
                label: (
                  <div className="flex items-center gap-2">
                    <Trash2 className="w-4 h-4 text-red-500" />
                    <span>حذف</span>
                  </div>
                ),
                onClick: () => handleDeleteSupplier(record),
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
            عرض {range[0]} إلى {range[1]} من {total} بائع
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

export default SuppliersTable;
