import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "./componets/home";
import { BrowserRouter as Router } from "react-router-dom"; 
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const customTheme = extendTheme({ config });

function App() {
  return (
    <Router>
      <ChakraProvider theme={customTheme}>
        <Home />
      </ChakraProvider>
    </Router>
  );
}

export default App;