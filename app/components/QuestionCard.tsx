import { Card, Button, Group, ActionIcon, Input, Box } from "@mantine/core";
import {
  IconEdit,
  IconGitBranch,
  IconQuestionMark,
  IconTool,
  IconTrash,
} from "@tabler/icons-react";
import QuestionTypeSelect from "./QuestionTypeSelect";
import AnswerChoice from "./AnswerChoice";

interface QuestionCardProps {
  id: string;
  question: string;
  type: string;
  answers: {
    id: string;
    answer: string;
  }[];
  removeQuestion: (id: string) => void;
  addAnswer: (id: string) => void;
  removeAnswer: (aId: string, qId: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  id,
  question,
  type,
  answers,
  removeQuestion,
  addAnswer,
  removeAnswer,
}) => {
  return (
    <Card
      maw={550}
      bg="#F9FAFB"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Group position="apart">
        <Group spacing="sm">
          <Button leftIcon={<IconEdit size="1rem" />}>Edit</Button>
          <Button variant="subtle" leftIcon={<IconTool size="1rem" />}>
            Option
          </Button>
          <Button variant="subtle" leftIcon={<IconGitBranch size="1rem" />}>
            Logic
          </Button>
        </Group>
        <ActionIcon onClick={() => removeQuestion(id)}>
          <IconTrash size="1.125rem" />
        </ActionIcon>
      </Group>
      <Box mt="md" mb="xs" sx={{ gap: 6 }} display="flex">
        <Input
          size="lg"
          w="70%"
          placeholder="Enter your question"
          icon={<IconQuestionMark />}
        />
        <QuestionTypeSelect />
      </Box>
      {answers.map((a) => {
        return (
          <AnswerChoice
            key={a.id}
            qId={id}
            addAnswer={() => addAnswer(id)}
            removeAnswer={() => removeAnswer(a.id, id)}
          />
        );
      })}
    </Card>
  );
};

export default QuestionCard;
