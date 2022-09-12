import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "antd/dist/antd.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ChakraProvider>
    <App tab="home" />
  </ChakraProvider>,

  document.querySelector("#root")
);
