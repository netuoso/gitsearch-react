import React, { Component } from 'react';
import {
  Form,
  FormControl,
  Modal,
  Button,
  InputGroup,
  Container,
  Toast,
  ToastContainer
} from 'react-bootstrap';
import styles from './Github.module.css';

import User from './cards/User';
import Topic from './cards/Topic';
import Repository from './cards/Repository';
import Commit from './cards/Commit';
import Issue from './cards/Issue';
import Code from './cards/Code';

class Github extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: false,
      selectedUser: false,
      currentPage: 1,
      perPage: 24,
      searchType: "users",
      searchTerm: "",
      results: {
        users: {items: []},
        code: {items: []},
        topics: {items: []},
        commits: {items: []},
        repositories: {items: []},
        issues: {items: []},
        labels: {items: []}
      }
    }

    this.setSelectedUser = this.setSelectedUser.bind(this);
  }

  setSearchType(query) {
    // update the searchType and reset page counter to 1
    this.setState({searchType: query, currentPage: 1})
  }

  setSearchTerm(query) {
    // update the searchTerm and reset page counter to 1
    this.setState({searchTerm: query, currentPage: 1})
  }

  setSelectedUser(data) {
    this.setState({selectedUser: data})
  }

  fetchData = (page) => {
    let { results, perPage, searchType, searchTerm } = this.state;
    if(searchTerm === "") return;

    let githubUrl = `https://api.github.com/search/${searchType}`+
      `?q=${encodeURI(searchTerm)}&page=${page}&per_page=${perPage}`;

    fetch(githubUrl)
      .then(async (resp) => {
        if(resp.ok) {
          // set searchResult in state
          let newState = {};
          newState[searchType] = JSON.parse(await resp.text());
          // set the current page for use with pagination
          this.setState({results: {...results, ...newState}, currentPage: page});
        } else {
          this.setState({error: JSON.parse(await resp.text())});
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  renderResults = () => {
    let { results, searchType } = this.state;

    if(!results[searchType].items.length) return (<div className="text-center">No Results Found</div>)

    switch(searchType) {
      case "users":
        return results[searchType].items.map((item, index) => {
          return (
            <User
              key={`${item}-${index}`}
              data={item}
              setSelectedUser={this.setSelectedUser} />
          )
        })
      case "topics":
        return results[searchType].items.map((item, index) => {
          return (
            <Topic
              key={`${item}-${index}`}
              data={item} />
          )
        })
      case "repositories":
        return results[searchType].items.map((item, index) => {
          return (
            <Repository
              key={`${item}-${index}`}
              data={item} />
          )
        })
      case "commits":
        return results[searchType].items.map((item, index) => {
          return (
            <Commit
              key={`${item}-${index}`}
              data={item} />
          )
        })
      case "code":
        return results[searchType].items.map((item, index) => {
          return (
            <Code
              key={`${item}-${index}`}
              data={item} />
          )
        })
      case "issues":
        return results[searchType].items.map((item, index) => {
          return (
            <Issue
              key={`${item}-${index}`}
              data={item} />
          )
        })
      default:
        return (<div></div>)
    }
  }

  renderPaginate = () => {
    let { results, currentPage, perPage, searchType } = this.state;

    let items = results[searchType].items;
    let totalPages = Math.ceil((results[searchType].total_count || 0)/perPage);

    if(!items.length) return;

    return (
      <div>
        <div className={styles.row}>
          <Button
            variant="outline-secondary"
            disabled={currentPage <= 1}
            onClick={() => {this.fetchData(currentPage-1)}}
            type="submit" >
            {"<<<"}
          </Button>
          <h1>Page {currentPage} of {totalPages}</h1>
          <Button
            variant="outline-secondary"
            disabled={items.length < 1 || currentPage === totalPages}
            onClick={() => {this.fetchData(currentPage+1)}}
            type="submit" >
            {">>>"}
          </Button>
        </div>
      </div>
    );
  }

  render() {
    let { results, currentPage, error, searchType, selectedUser } = this.state;

    return (
      <Container>
        <ToastContainer className="p-3" position="top-end">
          <Toast
            show={!!error}
            onClose={() => this.setState({error: false})}
            delay={5000}
            bg="danger"
            autohide >
            <Toast.Header closeButton={false}>
              <strong className="me-auto">Error</strong>
            </Toast.Header>
            <Toast.Body>{error.message}</Toast.Body>
          </Toast>
        </ToastContainer>
        <div className={styles.row}>
          <Form
            onSubmit={(e) => e.preventDefault()} >
            <div className="row text-center">
              <div className="col-md-12">
                <Form.Select
                  onChange={(e) => this.setSearchType(e.target.value)}
                  className="form-control" >
                  <option value="users">Users</option>
                  <option value="topics">Topics</option>
                  <option value="repositories">Repositories</option>
                  <option value="commits">Commits</option>
                  <option value="issues">Issues</option>
                  <option value="code">Code</option>
                </Form.Select>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Github Search"
                    onChange={(e) => this.setSearchTerm(e.target.value)}
                    autoFocus={true}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => {this.fetchData(currentPage)}}
                    type="submit" >
                    Search
                  </Button>
                </InputGroup>
                {results[searchType].total_count ? `Found ${results[searchType].total_count} results` : "" }
              </div>
            </div>
          </Form>
        </div>
        {this.renderPaginate()}
        <div className="row" style={{marginTop: '1em'}}>
          {this.renderResults()}
        </div>
        <Modal show={selectedUser} onHide={() => this.setSelectedUser(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedUser.login}'s Detailed Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <User key="selected-user-details" data={selectedUser} detailed={true} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.setSelectedUser(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    )
  }
}

export default Github