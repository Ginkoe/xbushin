import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { VirmonThemeProvider } from "./providers/theme";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <VirmonThemeProvider>
            <App />
        </VirmonThemeProvider>
    </React.StrictMode>,
);
