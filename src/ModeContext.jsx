import { createContext } from "react";
export const ModeContext = createContext(localStorage.getItem("hhAppsMode"));