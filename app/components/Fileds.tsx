import {
  Group,
  createStyles,
  rem,
  Box,
  Text,
  Stack,
  Paper,
} from "@mantine/core";
import {
  IconCheckbox,
  IconCircleDot,
  IconLayoutSidebarLeftCollapse,
  IconMail,
  IconMenu,
  IconMenu2,
} from "@tabler/icons-react";
import IconTypeWrapper from "./IconTypeWrapper";

export const questionTypes = [
  { label: "Radio", type: "radio",  color:"#E6FCF5", icon: IconCircleDot },
  { label: "Checkboxes", type: "checkboxes", color:"#EDF2FF", icon: IconCheckbox },
  { label: "Short Answer", type: "short-answer", color:"#FFF9DB", icon: IconMenu },
  { label: "Long Answer", type: "long-answer", color:"#FFF5F5", icon: IconMenu2 },
  { label: "Email", type: "email", color:"#E6FCF5", icon: IconMail },
];

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: "#F8F9FA",
    paddingBottom: 0,
  },
  header: {
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.blue,
  },
  item:{
    display: "flex",
    alignItems: "center",
    columnGap: 5
  },
  iconWrapper:{
    padding: 2,
    width: 30,
    height: 30,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const Fields = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Box p="md"  className={classes.header}>
        <Group position="apart">
          <Text className={classes.title}>Fields</Text>
          <IconLayoutSidebarLeftCollapse />
        </Group>
      </Box>
      <Stack h="100%" spacing="lg" mt={20}  bg="#F8F9FA">
        {questionTypes.map(({label, icon: Icon, color}) => {
          return (
            <Paper key={label} className={classes.item} shadow="xs" p="md" withBorder>
              <IconTypeWrapper color={color} icon={Icon} />
              <Text>{label}</Text>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Fields;
