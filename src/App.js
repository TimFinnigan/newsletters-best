import React from "react";
import NewsletterComponent from "./components/newsletterTable.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="app-wrapper">
          <h2>Newsletters.best</h2>
          <h4>The best newsletters online today</h4>
          <NewsletterComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
