import { Stack, TextField } from "@mui/material";
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
      <TextField value={person.name} onChange={handleNameChange} />
    </Stack>
  );
}
