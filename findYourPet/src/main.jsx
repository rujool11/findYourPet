import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
import InfoProvider from "./context/InfoProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <InfoProvider>
      <App />
    </InfoProvider>
  </ChakraProvider>
);
