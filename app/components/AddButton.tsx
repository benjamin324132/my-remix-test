import { Card } from "@mantine/core";
import { Icon123, IconCirclePlus } from "@tabler/icons-react";

interface AddButtonProps {
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({
  onClick
}) => {
  return (
    <Card
      onClick={onClick}
      maw={520}
      w="100%"
      bg="#F9FAFB"
      shadow="sm"
      padding="xs"
      radius="md"
      mt={20}
      withBorder
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        cursor: "pointer",
      }}
    >
      <IconCirclePlus />
      <span>Add Question</span>
    </Card>
  );
};

export default AddButton;
