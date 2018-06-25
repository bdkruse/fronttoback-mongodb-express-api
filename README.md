# fronttoback-mongodb-express
This is the MongoDB/Express component that is a requirement for the [front to back data demo](https://github.com/bdkruse/Front-Back-Data-Demo)

### Prerequisites
```
Node -https://nodejs.org/en/
MongoDB - https://www.mongodb.com/download-center?#community
Angular CLI
```

### Getting Started
Download or clone this repository

Install from the root folder
```
npm install
```

Install Angular CLI, if not already installed
```
npm install -g @angular/cli
```

Create data folder for MongoDB, default in the drive root
```
C:/data/db
C:/data/log
```
    
Navigate to MongoDB/Sever/version#/bin, then start MongoDB
```
mongo
```

Open another command line window or terminal, from the same folder run
```
mongorestore --db bookstore path/to/frontobackAPI/dump/bookstore
```

From the project root, run the application
```
node app
```

Test the API
```
http://localhost:3000/api/books
```

This project is now ready to be used in the Front to Back Data Demo