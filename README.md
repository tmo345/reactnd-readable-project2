# React and Redux course final assessment project
## Readable
### Udacity React Nanodegree
Readable app built with React and Redux using the provided [local server api](https://github.com/udacity/reactnd-project-readable-starter) and
[create-react-app](https://github.com/facebookincubator/create-react-app)

The app has two main views, a main page with a list of posts ranked by votes and a post detail page
that also displays comments. From all pages, there is an add post button that opens a modal with an
add post form. On the main page, users can sort posts by votes or data and filter them by category.
Posts can be upvoted, downvoted, editted, and deleted from the main page as well. On the post detail
page, similar functionality is available with voting, editting, and deleting the post. Below the
post detail, there is a comments sections listing comments with the ability to add, edit, and delete comments.
Comments may also be sorted by votes or date.

### Installation


Clone repository:
```
$ git clone https://github.com/tmo345/reactnd-readable-project2
```
#### Backend
From project root:
```
cd server-readable/api-server
```
Npm install server dependencies
```
npm install
```
Run server which will run from [localhost:3001](http://localhost:3000)
```
node server
```

#### Front End
In a **new terminal window** run npm install from project root:
```
$ npm install
```
Run npm start to start the development server:
```
$ npm start
```
The app should automatically launch in a new tab in your default browser or it can be found by
default at [localhost:3000](http://localhost:3000).
