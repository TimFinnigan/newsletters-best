import React, { useMemo } from "react";
import Table from "./Table";
import "./App.css";
let newsletters = require("./newsletters.json");

const Genres = ({ values }) => {
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

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "Newsletter",
        columns: [
          {
            Header: "Name",
            accessor: "show",
            Cell: ({ cell: { value } }) => (
              <a href={value.url} target="_blank" rel="noopener noreferrer">
                {value.name}
              </a>
            )
          },
          {
            Header: "Author",
            accessor: "show.type"
          }
        ]
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Description",
            accessor: "show.url"
          },
          {
            Header: "Category",
            accessor: "show.genres",
            Cell: ({ cell: { value } }) => <Genres values={value} />
          },
          {
            Header: "Frequency",
            accessor: "show.status"
          }
        ]
      }
    ],
    []
  );

  return (
    <div className="App">
      <Table columns={columns} data={newsletters} />
    </div>
  );
}

export default App;
