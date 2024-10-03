import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import MapEmbed from "./components/MapEmbed.jsx";
import InfoSection from "./components/InfoSection.jsx";
import { Box } from "@chakra-ui/react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />

      <Box 
      display="flex" 
      justifyContent="space-between"
      alignItems="center"
      >
        <MapEmbed />
        <InfoSection />
      </Box>
    </div>
  );
}

export default App;
