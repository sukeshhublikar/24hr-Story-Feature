import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Stories from "./Stories";
import Preview from "./Preview";

export interface ItemType {
  image: string;
  time: string;
}

export interface LocalStorageContextType {
  value: Array<ItemType>;
  updateValue: (newValue: Array<ItemType>) => void;
}

export const LocalStorageContext = createContext<
  LocalStorageContextType | undefined
>(undefined);

export function useLocalStorageContext() {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      "useLocalStorageContext must be used within a LocalStorageProvider"
    );
  }
  return context;
}

function App() {
  const [value, setValue] = useState(() => {
    // Try to fetch from localStorage on initial render
    const savedValue = localStorage.getItem("stories");
    return savedValue ? JSON.parse(savedValue) : [];
  });

  useEffect(() => {
    localStorage.setItem("stories", JSON.stringify(value));
  }, [value]);

  const updateValue = (newValue: Array<ItemType>) => {
    setValue(newValue);
  };

  return (
    <LocalStorageContext.Provider value={{ value, updateValue }}>
      <div className="text-slate-500 dark:text-[#e2e8f0] bg-white dark:bg-slate-900  px-8 py-4 h-screen">
        <Header />
        <Stories />
      </div>
      <Preview />
    </LocalStorageContext.Provider>
  );
}

export default App;
