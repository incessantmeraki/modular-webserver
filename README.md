## Modular Web Server

Simple and small modular web framework

It uses following modules
- nodejs core [http](https://nodejs.org/api/http.html) module for server
- [routes](https://github.com/aaronblohowiak/routes.js) module for routing
- [ecstatic](https://github.com/jfhbrook/node-ecstatic) to serve static fies
- [yo-yo](https://github.com/maxogden/yo-yo) and [hyperstream](https://github.com/substack/hyperstream) for templating

## Usage

### Structure
There are three files:
- **index.js** : main file 
- **routes.js** : routing and view part handle
- **./public** : static contents like html page

### Installation

```sh
$ npm install
$ node index.js
```

## License
MIT
