import { Button, Modal, Space, Typography } from "antd";
import { ExclamationCircleFilled, DeleteOutlined } from "@ant-design/icons";

const DeleteModal = ({
  open,
  onCancel,
  onConfirm,
  title,
  note,
  isDeleting = false,
}: {
  open: boolean;
  title?: string;
  note?: string;
  isDeleting?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) => {
  const { Text, Title } = Typography;

  return (
    <Modal
      title={
        <Space>
          <ExclamationCircleFilled style={{ color: "#ff4d4f", fontSize: 20 }} />
          <span>تأكيد الحذف</span>
        </Space>
      }
      open={open}
      onCancel={onCancel}
      footer={
        <Space>
          <Button
            type="primary"
            danger
            icon={isDeleting ? null : <DeleteOutlined />}
            onClick={onConfirm}
            loading={isDeleting}
            className="pb-1"
          >
            {isDeleting ? "جاري الحذف..." : "حذف"}
          </Button>
          <Button onClick={onCancel} disabled={isDeleting}>
            إلغاء
          </Button>
        </Space>
      }
      centered
      width={450}
    >
      <div style={{ padding: "16px 0", textAlign: "right" }}>
        <Title level={5} style={{ marginBottom: 8 }}>
          {title}
        </Title>
        <Text type="secondary">{note}</Text>
      </div>
    </Modal>
  );
};

export default DeleteModal;
