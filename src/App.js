import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>bla</Button>
      <Button>bli</Button>
      <Button>blub</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
