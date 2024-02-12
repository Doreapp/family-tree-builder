import { Container, CssBaseline, Stack } from "@mui/material";
import { useState } from "react";
import Tree from "./components/Tree";
import { Person } from "./core/models";

function App() {
  const [rootPerson, setRootPerson] = useState<Person>({ name: "" });

  return (
    <CssBaseline>
      <Container sx={{ height: "100vh" }}>
        <Stack
          height="100%"
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Tree person={rootPerson} setPerson={setRootPerson} />
        </Stack>
      </Container>
    </CssBaseline>
  );
}

export default App;
