import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(
    () => () => {
      console.error("This is a logged error"); // we expect it to fail the test
    },
    [],
  );

  return <p>This is some text</p>;
}

export default App;
