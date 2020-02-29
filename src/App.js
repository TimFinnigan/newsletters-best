import React, { useMemo } from "react";
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

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "Newsletter",
        columns: [
          {
            Header: " ",
            accessor: "image",
            Cell: ({ cell: { value } }) => <img class="icon" src={value} />
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
      <Table columns={columns} data={newsletters} />
    </div>
  );
}

export default App;
