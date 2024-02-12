import AddIcon from "@mui/icons-material/Add";
import { Container, CssBaseline, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import Tree from "./components/Tree";
import { Person } from "./core/models";

function App() {
  const [rootPerson] = useState<Person | undefined>();

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
          {rootPerson ? (
            <Tree person={rootPerson} />
          ) : (
            <IconButton>
              <AddIcon />
            </IconButton>
          )}
        </Stack>
      </Container>
    </CssBaseline>
  );
}

export default App;
