## Readable
**READABLE** is the second project from the **Udacity's React Developer Nanodegree** program.

Readable project is a content and comment web app. Users are able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users are also able to edit and delete posts and comments.


## Table of contents

 - [Pre-requisites](#pre-requisites)
 - [How to install](#how-to-install)
 - [How to run](#how-to-run)
 - [How it works](#how-it-works)
	 - [Home Page](#home-page)
	 - [Post Details](#post-details)
 - [Backend Server](#backend-server)

### Pre-requisites
Before being able to run this application, you must have [Node](https://nodejs.org/en/) installed on your system.

## How to install
To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm]) installed on your computer. From your command line, type:

```bash
# Clone this repository
$ git clone https://github.com/VanessaEly/reactnd-project-readable.git

# Go into the repository
$ cd reactnd-project-readable

# Install dependencies
$ npm install
```
[(Back to top)](#readable)

## How to run
Be sure to have the dependencies installed before, using npm install command.
The application runs on ```http://localhost:3000``` as default.
To be able to run the application, run the following command in your terminal:

```bash
# Starting app. This command will get both our app and server running
npm start
```

## How it works

This project has two pages: Dasboard and Post Details.

### Home Page
This page can be accessed through **/** path.
All posts are listed at the root.
All posts for a category are listed at **/:category**

Listed posts are displayed with the following:
- Title
- Author
- Number of comments
- Current score
- Voting mechanism to upvote or downvote the post
- Buttons or links for editing or deleting that post

By clicking in the post **title, message or comments**, the user is able to navigate to [Post Details](#post-details) page.

The comment count, edit/delete buttons or links, and upvote/downvote features are available on this page in order to enable the user to manage the posts without navigating away.
List pages (root or category) include a mechanism for sorting posts, and a button to add a new post.

### Post Details
Post detail is available at **/:category/:post_id**

Post is displayed with the following:
- Title
- Body
- Author
- Number of comments
- Current score
- Voting mechanism to upvote or downvote the post
- Buttons or links for editing or deleting that post

Listed comments are displayed with the following:
- Author
- Current score
- Voting mechanism to upvote or downvote the comment
- Buttons or links for editing or deleting that comment

All comments for a post are displayed below the post body.
A mechanism for adding a new comment is visible on this page.

[(Back to top)](#readable)

## Backend Server

### Include An Authorization Header

All requests should use an **Authorization header** to work with your own data:

```js
fetch(
    url,
    {
        headers: { 'Authorization': 'whatever-you-want' }
    }
)
```

[(Back to top)](#readable)

### Comment Counts
Posts retrieved in a list or individually now contain comment counts in the format `post: { commentCount: 0 }`.  This should make it easier to display the number of comments a post has without having to call the comments endpoint for each post.   This count is updated whenever a comment is added or deleted via the `POST /comments` or `DELETE /comments/:id` endpoints.

### API Endpoint

The following endpoints are available:

| Endpoints       | Usage          | Params         |
|-----------------|----------------|----------------|
| `GET /categories` | Get all of the categories available for the app. List is found in `categories.js`. Feel free to extend this list as you desire. |  |
| `GET /:category/posts` | Get all of the posts for a particular category. |  |
| `GET /posts` | Get all of the posts. Useful for the main page when no category is selected. |  |
| `POST /posts` | Add a new post. | **id** - UUID should be fine, but any unique id will work <br> **timestamp** - [Timestamp] Can in whatever format you like, you can use `Date.now()` if you like. <br> **title** - [String] <br> **body** - [String] <br> **author** - [String] <br> **category** -  Any of the categories listed in `categories.js`. Feel free to extend this list as you desire. |
| `GET /posts/:id` | Get the details of a single post. | |
| `POST /posts/:id` | Used for voting on a post. | **option** - [String]: Either `"upVote"` or `"downVote"`. |
| `PUT /posts/:id` | Edit the details of an existing post. | **title** - [String] <br> **body** - [String] |
| `DELETE /posts/:id` | Sets the deleted flag for a post to 'true'. <br> Sets the parentDeleted flag for all child comments to 'true'. | |
| `GET /posts/:id/comments` | Get all the comments for a single post. | |
| `POST /comments` | Add a comment to a post. | **id** - Any unique ID. As with posts, UUID is probably the best here. <br> **timestamp** - [Timestamp] Get this however you want. <br> **body** - [String] <br> **author** - [String] <br> **parentId** - Should match a post id in the database. |
| `GET /comments/:id` | Get the details for a single comment. | |
| `POST /comments/:id` | Used for voting on a comment. | **option** - [String]: Either `"upVote"` or `"downVote"`.  |
| `PUT /comments/:id` | Edit the details of an existing comment. | **timestamp** - timestamp. Get this however you want. <br> **body** - [String] |
| `DELETE /comments/:id` | Sets a comment's deleted flag to `true`. | &nbsp; |

[(Back to top)](#readable)