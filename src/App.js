import { Box } from "@mui/material";
import Main from "./components/Main";

import DataContextProvider from "./context/DataContext";

function App() {
  return (
    <DataContextProvider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Main />
      </Box>
    </DataContextProvider>
  );
}

export default App;
