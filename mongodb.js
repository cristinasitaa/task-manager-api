const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
       return  console.log('Unable to connect to database.')
    }
  
    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description: 'First task'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5eb2d336f5ffcd6c607b5ae8')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('users').find({age: 28}).toArray((error,users) => {
    //     console.log(users)
    // })
    // db.collection('tasks').findOne({_id: ObjectID('5eb2d54b43b2576d50c141cc')}, (error, task) => {
    //     console.log(task)
    // })


    // db.collection('tasks').find({completed: false}).toArray((error,tasks) => {
    //     console.log(tasks)
    // })



    // db.collection('users').findOne({name: 'Jen'}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     } 
    //     console.log(user)
    // })
    // db.collection('users').insertOne({
    //     name: 'Cristina',
    //     age: 28
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert')
    //     }
    //     console.log(result.ops)
    // })

//     db.collection('users').insertMany([
//         {
//             name: 'Jen',
//             age: 28
//         }, {
//             name: 'Gunther',
//             age: 27
//         }
//     ], (error, result) => {
//         if (error) {
//             return console.log('Unable to insert')
//         }
//         console.log(result.ops)
//     })

//     db.collection('tasks').insertMany([
//         {
//             description: 'First task',
//             completed: false
//         },{
//             description: 'Second task',
//             completed: false
//         },{
//             description: 'Third task',
//             completed: false
//         }
//     ], (error, result) => {
//         if (error) {
//             return console.log('Unable to insert')
//         }
//         console.log(result.ops)
//     })
})