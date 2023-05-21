import { Box, createStyles } from "@mantine/core";
import { TablerIconsProps } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  iconWrapper: {
    padding: 2,
    width: 30,
    height: 30,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

interface IconTypeWrapperProps {
  color: string;
  icon: (props: TablerIconsProps) => JSX.Element;
}

const IconTypeWrapper: React.FC<IconTypeWrapperProps> = ({
  color,
  icon: Icon,
}) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.iconWrapper} sx={{ backgroundColor: color }}>
      <Icon size={15} />
    </Box>
  );
};

export default IconTypeWrapper;
