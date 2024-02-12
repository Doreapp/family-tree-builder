import { Container, ContainerProps } from "@mui/material";
import { Person } from "core/models";

export type TreeProps = {
  person: Person;
} & ContainerProps;

export default function Tree({ person, ...other }: TreeProps) {
  return <Container {...other}>{person.name}</Container>;
}
