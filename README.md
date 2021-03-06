![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## socket.io namespaces

### Author: Lena Eivy

### Links and Resources
* [repo](https://github.com/applena/09-socket.io-ns)
* [travis](https://travis-ci.com/applena/09-socket.io-ns.svg?branch=master)

### Modules
#### `letter.js`
##### Exported Values and Methods

###### `letter() -> number`
exports a letter that increments alphabetically each time it is called

#### `number.js`
##### Exported Values and Methods

###### `number() -> number`
exports a counter that keeps track of how many times it was called

### Setup
#### `.env` requirements
* `PORT` - Port Number 3000

#### Running the app
* `npm i`
* to run the app:
  * run `npm start`
  * in a differnt terminal:
    * run `node app.js`
    * in a differnt terminal:
      * run `node client.js`
  * visit: (`https://pmww0ww42q.codesandbox.io/`) to watch the numnbers and letters increment. 


#### Tests
* `npm run test`
* assertiations: 
  * that the counter increments the count
  * that the letter increments

