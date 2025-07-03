"use client";

import { Building, Mail, User, Key, MoreHorizontal } from "lucide-react";
import type { ColumnsType } from "antd/es/table";
import { Table, Tag, Button, Dropdown } from "antd";
import { Eye, Edit, Trash2 } from "lucide-react";

interface Company {
  key: string;
  companyName: string;
  managerEmail: string;
  managerName: string;
  managerPassword: string;
  status?: string;
}

const handleViewCompany = (record: Company) => {
  console.log("View company:", record);
};

const handleEditCompany = (record: Company) => {
  console.log("Edit company:", record);
};

const handleDeleteCompany = (record: Company) => {
  console.log("Delete company:", record);
};

const CompaniesTable = ({ data }: { data: Company[] }) => {
  const columns: ColumnsType<Company> = [
    {
      title: "اسم الشركة",
      dataIndex: "companyName",
      key: "companyName",
      render: (text) => (
        <div className="flex items-center gap-2 font-medium">
          <Building className="w-4 h-4 text-primary" />
          {text}
        </div>
      ),
    },
    {
      title: "بريد المدير",
      dataIndex: "managerEmail",
      key: "managerEmail",
      render: (text) => (
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-blue-500" />
          {text}
        </div>
      ),
    },
    {
      title: "اسم المدير",
      dataIndex: "managerName",
      key: "managerName",
      render: (text) => (
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-orange-500" />
          {text}
        </div>
      ),
    },
    {
      title: "كلمة المرور",
      dataIndex: "managerPassword",
      key: "managerPassword",
      render: (text) => (
        <div className="flex items-center gap-2">
          <Key className="w-4 h-4 text-gray-500" />
          {text}
        </div>
      ),
    },
    {
      title: "الحالة",
      key: "status",
      render: () => {
        const status = Math.random() > 0.5 ? "نشطة" : "غير نشطة";
        const color = status === "نشطة" ? "green" : "red";

        return (
          <Tag color={color} className="text-xs">
            {status}
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
                onClick: () => handleViewCompany(record),
              },
              {
                key: "2",
                label: (
                  <div className="flex items-center gap-2">
                    <Edit className="w-4 h-4 text-yellow-500" />
                    <span>تعديل</span>
                  </div>
                ),
                onClick: () => handleEditCompany(record),
              },
              {
                key: "3",
                label: (
                  <div className="flex items-center gap-2">
                    <Trash2 className="w-4 h-4 text-red-500" />
                    <span>حذف</span>
                  </div>
                ),
                onClick: () => handleDeleteCompany(record),
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
            عرض {range[0]} إلى {range[1]} من {total} شركة
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

export default CompaniesTable;
