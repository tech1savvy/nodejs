```js
use dbName
show databases

db.createCollection('collectionName');
show collections

db.collectionName.drop()
db.dropDatabase()


db.collectionName.insertOnt({"username":"a-kon","pasword":"akon1234","age":13})
db.collectionName.insertMany([
    {"username":"a-kon","password":"akon1234","age":13},
    {"username":"b-kon","password":"bkon1234","age":14}
    ])

db.collectionName.find({"username":"a-kon});

// show all in formatted way
db.collectionName.find().pretty()

// SELECTION_CRETERIA, UPDATED_DATA
db.collectionName.update({"username":"a-kon"},{$set:{"password":"newPasswordValue"}};
updateOne()
updateMany()

// DELETION_CRETERIA
db.collectionName.remove({"username":"b-kon"})

// 1: ascending order, -1: descending order
db.collectionName.find().sort({"field1":1,"field2":-1})

// Aggregation
skip

// operators
find({field1: {$gt: 18}});
find({field1: {$ge: 18}});
find({field1: {$lt: 18}});
find({field1: {$lte: 18}});
```