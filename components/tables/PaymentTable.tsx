"use client";

import { Button, Dropdown, Table } from "antd";
import {
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { TransactionType } from "@/types";

export function TransactionsTable({
  transactions,
}: {
  transactions: TransactionType[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const handleView = (record: TransactionType) => {
    console.log("View record:", record);
  };

  const handleEdit = (record: TransactionType) => {
    console.log("Edit record:", record);
  };

  const handleDelete = (record: TransactionType) => {
    console.log("Delete record:", record);
  };

  const columns: ColumnsType<TransactionType> = [
    {
      title: "التاريخ",
      dataIndex: "date",
      key: "date",
      width: 100,
    },
    {
      title: "النوع",
      dataIndex: "type",
      key: "type",
      render: (type: string) => (
        <div className="flex items-center gap-2">
          {type.includes("دخل") ? (
            <ArrowUpRight className="w-4 h-4 text-green-500" />
          ) : type === "مصروف" ? (
            <ArrowDownRight className="w-4 h-4 text-red-500" />
          ) : (
            <FileText className="w-4 h-4 text-blue-500" />
          )}
          {type}
        </div>
      ),
    },
    {
      title: "المبلغ",
      dataIndex: "amount",
      key: "amount",
      render: (amount: string) => (
        <span
          className={amount.startsWith("+") ? "text-green-600" : "text-red-600"}
        >
          {amount} ل.س
        </span>
      ),
    },
    {
      title: "الحساب",
      dataIndex: "account",
      key: "account",
    },
    {
      title: "الطرف المقابل",
      dataIndex: "counterparty",
      key: "counterparty",
    },
    {
      title: "التصنيف",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "الحالة",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        if (status === "متأخر") {
          return (
            <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs">
              {status}
            </span>
          );
        } else if (status === "قيد الانتظار") {
          return (
            <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs">
              {status}
            </span>
          );
        } else if (status === "مدفوع") {
          return (
            <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">
              {status}
            </span>
          );
        }
        return null;
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
                onClick: () => handleView(record),
              },
              {
                key: "2",
                label: (
                  <div className="flex items-center gap-2">
                    <Edit className="w-4 h-4 text-yellow-500" />
                    <span>تعديل</span>
                  </div>
                ),
                onClick: () => handleEdit(record),
              },
              {
                key: "4",
                label: (
                  <div className="flex items-center gap-2">
                    <Trash2 className="w-4 h-4 text-red-500" />
                    <span>حذف</span>
                  </div>
                ),
                onClick: () => handleDelete(record),
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

  const itemRender = (
    _: any,
    type: string,
    originalElement: React.ReactNode
  ) => {
    if (type === "prev") {
      return <a>السابق</a>;
    }
    if (type === "next") {
      return <a>التالي</a>;
    }
    return originalElement;
  };

  return (
    <Table
      columns={columns}
      dataSource={transactions}
      pagination={{
        current: currentPage,
        pageSize: pageSize,
        total: transactions.length,
        showSizeChanger: true,
        pageSizeOptions: ["5", "10", "20", "50"],
        onChange: (page, size) => {
          setCurrentPage(page);
          setPageSize(size);
        },
        showTotal: (total, range) => (
          <span className="text-sm text-muted-foreground">
            عرض {range[0]}-{range[1]} من {total} معاملات
          </span>
        ),
        itemRender: itemRender,
        position: ["bottomRight"],
      }}
      className="w-full"
    />
  );
}
