import ReactDOM from "react-dom/client";
import { Web3Modal } from '@web3modal/react'
import App from "./App";

const config = {
  projectId: "17c0a97569725cda9d0ffc46d581d024",
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: 'web3Modal',
    autoConnect: true
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Web3Modal config={config} />
  </>

);