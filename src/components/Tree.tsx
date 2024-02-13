import AddIcon from "@mui/icons-material/Add";
import { Button, Stack, TextField } from "@mui/material";
import { Person } from "core/models";
import { ChangeEvent, useCallback } from "react";

export type TreeProps = {
  person: Person;
  setPerson: (person: Person) => void;
};

export default function Tree({ person, setPerson, ...other }: TreeProps) {
  const handleNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPerson({ ...person, name: event.target.value });
    },
    [person],
  );

  return (
    <Stack {...other}>
      <Button startIcon={<AddIcon />}>père/mère</Button>
      <TextField
        sx={{ textAlign: "center" }}
        value={person.name}
        onChange={handleNameChange}
      />
      <Button startIcon={<AddIcon />}>fils/fille</Button>
    </Stack>
  );
}
