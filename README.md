# fronttoback-mongodb-express
This is the MongoDB/Express component that is a requirement for the [front to back data demo](https://github.com/bdkruse/Front-Back-Data-Demo)

### Prerequisites
```
[Node](https://nodejs.org/en/)
[MongoDB](https://www.mongodb.com/download-center?#community)
```

### Getting Started
Download or clone this repository

Install from the root folder
```
$ npm install
```

Next create a database. From the project root run
```
mongorestore --db bookstore dump/bookstore
```

From the project root, run the application
```
$ node app
```

Test the API
```
http://localhost:3000/api/books
```

This project is now ready to be used in the Front to Back Data Demo