import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { App } from "./App";
import "./index.css";

const root = document.getElementById("root");
if (root == null) {
    throw new Error("we cannot root element");
}

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>
);
