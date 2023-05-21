import { Box, createStyles } from "@mantine/core";
import QuestionCard from "./QuestionCard";
import AddButton from "./AddButton";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    overflowY: "scroll",
  },
}));

const data = [
  {
    id: "1",
    question: "",
    type: "radio",
    answers: [
      {
        id: "1",
        answer: "",
      },
      {
        id: "2",
        answer: "",
      },
    ],
  },
  {
    id: "2",
    question: "",
    type: "radio",
    answers: [
      {
        id: "1",
        answer: "",
      },
      {
        id: "2",
        answer: "",
      },
      {
        id: "3",
        answer: "",
      },
    ],
  },
];

const Body = () => {
  const { classes } = useStyles();
  const [questions, setQuestions] = useState(data);

  const addQuestion = () => {
    const newQuestion = {
      id: generateId(),
      question: "",
      type: "radio",
      answers: [ {
        id: "1",
        answer: "",
      },],
    };
    setQuestions((prev) => [...prev, newQuestion]);
  };

  const removeQuestion = (id: string) =>{
    setQuestions((prev) => prev.filter((q) => q.id != id));
  }

  const addAnswer = (id: string) =>{
     setQuestions((prev) => prev.map((q) => {
      if(q.id == id){
        q.answers.push({id: generateId(), answer:""})
        return q
      }
      return q
     }))
  }

  const removeAnswer = (aId:string, qId: string) => {
    setQuestions((prev) => prev.map((q) => {
      if(q.id == qId){
        q.answers = q.answers.filter((a) => a.id != aId)
        return q
      }

      return q
     }))
  }

  const generateId = () =>{
    return Math.floor(Math.random() * 100).toString();
  }

  return (
    <Box className={classes.container}>
      {questions.map((q) => {
        return (
          <QuestionCard
            key={q.id}
            id={q.id}
            answers={q.answers}
            type={q.type}
            question={q.question}
            removeQuestion={removeQuestion}
            addAnswer={addAnswer}
            removeAnswer={removeAnswer}
          />
        );
      })}
      <AddButton onClick={addQuestion} />
    </Box>
  );
};

export default Body;
