import { Home } from "./components/Home";
import { FetchProvider } from "./contexts/AppContext";
import { AppContent } from "./styles/styled/App.styled";

function App() {
  return (
    <FetchProvider>
      <AppContent>
        <Home />
      </AppContent>
    </FetchProvider>
  );
}

export default App;
// import { useState } from "react";

// function App() {
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState("");

//   const fetchResponse = async (event) => {
//     event.preventDefault();
//     if (!input) return;
//     const response = await fetch("https://jeans-pangolin.cyclic.app/", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ prompt: input }),
//     });
//     const data = await response.json();
//     setResult(data);
//     setInput("");
//   };

//   // useEffect(() => {
//   //   fetchResponse();
//   // }, []);
//   return (
//     <div className="App">
//       <form onSubmit={fetchResponse}>
//         <input
//           type="text"
//           name="prompt"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <input type="submit" value="Get Response" />
//         <div className="result">
//           <p> {result}</p>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;
