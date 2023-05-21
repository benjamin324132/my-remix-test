import { Text, Button, Stack, Container, Grid } from "@mantine/core";
import Body from "~/components/Body";
import Fields from "~/components/Fileds";
import  NavbarNested from "~/components/NavBar";
import Users from "~/components/Users";

export default function Index() {
  return (
    <Grid>
      <Grid.Col span="auto" bg="#F8F9FA">
        <NavbarNested />
      </Grid.Col>
      <Grid.Col span="auto" bg="#F8F9FA">
        <Fields />
      </Grid.Col>
      <Grid.Col span={7}>
        <Body />
      </Grid.Col>
    </Grid>
  );
}
