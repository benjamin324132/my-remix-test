import { Component, useState } from 'react';
import { createStyles, UnstyledButton, Menu, Image, Group, rem } from '@mantine/core';
import { IconChevronDown, IconCircleDot } from '@tabler/icons-react';
import { questionTypes } from './Fileds';
import IconTypeWrapper from './IconTypeWrapper';

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    width: rem(200),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    transition: 'background-color 150ms ease',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.white,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: 'transform 150ms ease',
    transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
  },
}));

const QuestionTypeSelect = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(questionTypes[0]);
  const items = questionTypes.map(({icon: Icon, ...item}) => (
    <Menu.Item
      icon={<IconTypeWrapper color={item.color} icon={Icon} />}
      onClick={() => setSelected({...item, icon: Icon})}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  const { icon: MyIcon } = selected 
  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
          <IconTypeWrapper color={selected.color} icon={MyIcon} />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}

export default QuestionTypeSelect;