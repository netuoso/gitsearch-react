# What is GitSearch
- GitSearch is a simple reimplementation of the Github Search API.
- The goal of this project is to demonstrate a reasonable understanding of various React features, components, and techniques.
- This project was initialized using `npx create-react-app gitsearch-api-react`.
- GitSearch uses unauthenticated requests to the Github v3 Search API. When viewing a User details, a request is made to the Github REST Api.
- GitSearch API Docs: `https://docs.github.com/en/rest/search`
- Git User API Docs: `https://docs.github.com/en/rest/users/users`

# As a User:
- I can search for users and see a paginated list of results
- I can navigate through the next and previous pages of the paginated results
- I see the total count of search results
- I see notable information for each search result, such as the description, star/follower count, profile pictures, etc.
- I can select a search result and be taken to the applicable page on github.com API

# To Run the App:
- `npm start`
