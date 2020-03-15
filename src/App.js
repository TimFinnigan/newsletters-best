import React, { useMemo } from "react";
import ReactGA from "react-ga";
import Table from "./Table";
import "./App.css";
let newsletters = require("./newsletters.json");

const Categories = ({ values }) => {
  return (
    <>
      {values.map((genre, idx) => {
        return (
          <span key={idx} className="badge">
            {genre}
          </span>
        );
      })}
    </>
  );
};

const initializeAnalytics = function() {
  const trackingId = "UA-74402730-2";
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/Home");
};

function App() {
  initializeAnalytics();
  const columns = useMemo(
    () => [
      {
        Header: "Newsletter",
        columns: [
          {
            Header: " ",
            accessor: "image",
            Cell: ({ cell: { value } }) => (
              <img className="icon" src={value} alt="" />
            )
          },
          {
            Header: "Name",
            accessor: "source",
            Cell: ({ cell: { value } }) => (
              <a href={value.url} target="_blank" rel="noopener noreferrer">
                {value.name}
              </a>
            )
          },
          {
            Header: "Author",
            accessor: "author"
          }
        ]
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Description",
            accessor: "description"
          },
          {
            Header: "Category",
            accessor: "categories",
            Cell: ({ cell: { value } }) => <Categories values={value} />
          },
          {
            Header: "Frequency",
            accessor: "frequency"
          }
        ]
      }
    ],
    []
  );

  return (
    <div className="App">
      <h1>newsletters.best</h1>
      <span id="subscribe">
        <a
          href="https://tinyletter.com/newsletters-best"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subscribe
        </a>{" "}
        for monthly updates on new newsletters
      </span>
      <Table
        columns={columns}
        data={newsletters.sort(() => Math.random() - 0.5)}
      />
      <footer>
        <span>
          Made by{" "}
          <a
            href="http://timfinnigan.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tim Finnigan
          </a>
        </span>
      </footer>
      <span>TODO</span>
      <ol>
        <li>Home site: add email. reorder projects(newsletters first)</li>
        <li>share on product hunt</li>
        <li>
          upon launching - thank people on Twitter (also helps spread the
          word...)
        </li>
        <li>Add 100 newsletters</li>
        <li>Add pagination? start with 50?</li>
      </ol>
    </div>
  );
}

export default App;
