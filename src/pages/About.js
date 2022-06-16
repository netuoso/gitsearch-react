import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class About extends Component {
  render() {
    return  (
      <div>
        <div className="row mb-20">
          <h1>What is GitSearch</h1>
          <p>GitSearch is a simple reimplementation of the Github Search API.</p>
          <p>The goal of this project is to demonstrate a reasonable understanding of various React features, components, and techniques.</p>
          <p>This project was initialized using <code>npx create-react-app gitsearch-api-react</code>.</p>
          <p>GitSearch uses unauthenticated requests to the Github v3 Search API. When viewing a User details, a request is made to the Github REST Api.</p>
          <p>GitSearch API Docs: <code>https://docs.github.com/en/rest/search</code></p>
          <p>Git User API Docs: <code>https://docs.github.com/en/rest/users/users</code></p>
        </div>
        <div className="row">
          <h1>As a User:</h1>
          <p>I can search for users and see a paginated list of results <FontAwesomeIcon icon={faCheck} /></p>
          <p>I can navigate through the next and previous pages of the paginated results <FontAwesomeIcon icon={faCheck} /></p>
          <p>I see the total count of search results <FontAwesomeIcon icon={faCheck} /></p>
          <p>I see notable information for each search result, such as the description, star/follower count, profile pictures, etc. <FontAwesomeIcon icon={faCheck} /></p>
          <p>I can select a search result and be taken to the applicable page on github.com API <FontAwesomeIcon icon={faCheck} /></p>
        </div>
      </div>
    )
  }
}

export default About