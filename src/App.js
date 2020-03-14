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
      <span>TODO</span>
      <ol>
        <li>randomize list on page load</li>
        <li>add google analytics</li>
        <li>add your own newletter to the top (mail chimp?)</li>
        <li>post on product hunt</li>
        <li>add an about page/contact form</li>
        <li>upon launching - thank people on Twitter</li>
        <li>
          hide Description column on Mobile/small views? (or convert to a button
          you can click to see popover of details!)
        </li>
      </ol>
      <h1>newsletters.best</h1>
      <Table
        columns={columns}
        data={newsletters.sort(() => Math.random() - 0.5)}
      />
    </div>
  );
}

export default App;
