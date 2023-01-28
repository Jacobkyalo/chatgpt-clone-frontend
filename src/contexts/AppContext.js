import { createContext, useState } from "react";

export const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const fetchResponse = async (event) => {
    event.preventDefault();
    if (!input) return;
    const response = await fetch("https://cyan-modern-hippo.cyclic.app/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: input }),
    });
    const data = await response.json();
    setResult(data);
    setInput("");
    // console.log(data);
  };

  return (
    <FetchContext.Provider
      value={{ input, setInput, result, setResult, fetchResponse }}
    >
      {children}
    </FetchContext.Provider>
  );
};
