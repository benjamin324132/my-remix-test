import { Navbar, Group, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconArrowLeft,
  IconAddressBook, 
  IconBox,
  IconBuildingSkyscraper
} from '@tabler/icons-react';
import LinksGroup from './LinksGroup';
import Users from './Users';

const mockdata = [
  { label: 'Personal Settings', icon: IconAddressBook,
  initiallyOpened: true,
  links: [
    { label: 'Profile', link: '/' },
    { label: 'Notifications', link: '/' },
    { label: 'Credentials', link: '/' }
  ],
},
  {
    label: 'Product Settings',
    icon: IconBox,
    initiallyOpened: true,
    links: [
      { label: 'Attributes', link: '/' },
      { label: 'Group mentions', link: '/' },
      { label: 'Task Forms', link: '/' },
      { label: 'Integrations', link: '/' },
    ],
  },
  {
    label: 'Workspace Settings',
    icon: IconBuildingSkyscraper,
    links: [
      { label: 'Billing', link: '/' },
      { label: 'Users', link: '/' },
      { label: 'Company', link: '/' },
      { label: 'Permissions', link: '/' },
    ],
  }
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: "#F8F9FA",
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },
  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  }
}));

export default function NavbarNested() {
  const { classes } = useStyles();
  
  const links = mockdata.map((item) => <LinksGroup 
  icon={item.icon}
  label={item.label}
  links={item.links}
  key={item.label} />);

  return (
    <Navbar height={800} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="left">
          <IconArrowLeft />
        </Group>
      </Navbar.Section>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}

