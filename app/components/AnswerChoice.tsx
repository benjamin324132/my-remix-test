import { ActionIcon, Box, Input, Radio, createStyles } from "@mantine/core";
import { IconGripVertical, IconMinus, IconPlus } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  btn: {
    width: "20px",
    height: "20px",
    padding: "0.3rem",
    borderRadius: "8px",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
}));

interface AnswerChoiceProps {
  qId: string;
  addAnswer: () => void;
  removeAnswer: () => void;
}

const AnswerChoice:React.FC<AnswerChoiceProps> = ({
  qId,
  addAnswer,
  removeAnswer
}) => {
  const { classes } = useStyles();
  return (
    <Box mt="md" mb="xs" sx={{ gap: 6, alignItems: "center" }} display="flex">
      <ActionIcon>
        <IconGripVertical size="1.125rem" />
      </ActionIcon>
      <Radio />
      <Input w="100%" placeholder="Enter an answer choice" />
      <Box sx={{ gap: 14, alignItems: "center" }} display="flex">
        <div className={classes.btn} onClick={removeAnswer}>
          <IconMinus />
        </div>
        <div className={classes.btn} onClick={addAnswer}>
          <IconPlus />
        </div>
      </Box>
    </Box>
  );
};

export default AnswerChoice;
