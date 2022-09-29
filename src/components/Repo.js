import React from "react";

function Repo(props) {
  return (
    <ul className="list-group">
      {props.results.map((result) => (
        <li className="list-group-item" key={result.id}>
          <p>{result.object_url}</p>
        </li>
      ))}
    </ul>
  );
}

export default Repo;
