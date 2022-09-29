import { useState, useEffect } from "react";
// import { Octokit } from "octokit";

import Repo from "./Repo";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

import search from "../utils/API";

// async
function Search() {
  // const octokit = new Octokit({
  //   auth: `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`,
  // });

  // const {
  //   data: { login },
  // } = await octokit.rest.users.getAuthenticated();
  // console.log("Hello, %s", login);

  const [results, setResults] = useState([]);

  const searchRepo = async (query) => {
    const response = await search(query);
    setResults(response.data.data);
  };

  useEffect(() => {
    searchRepo("angelawong3");
  }, []);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">REPO FINDER</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
      <Repo results={results} />
    </div>
  );
}

export default Search;
