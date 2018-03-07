// import * as firebase from 'firebase';

 // Initialize Firebase

//  const config = {
//     apiKey: "AIzaSyBdb2oXirels7hkonROcrAdzLBXEkRiZtM",
//     authDomain: "first-database-bbc57.firebaseapp.com",
//     databaseURL: "https://first-database-bbc57.firebaseio.com",
//     projectId: "first-database-bbc57",
//     storageBucket: "first-database-bbc57.appspot.com",
//     messagingSenderId: "391925072969"
//   };

//   firebase.initializeApp(config);

//   const database = firebase.database();

    // const myTitles = [];

    // database.ref('books').once('value').then((snapshot) => {
    //     snapshot.forEach((item) => {
    //         myTitles.push(item.key)
    //     })
    //     console.log(myTitles);
    // })

    // const books = [
    //     {
    //         title: 'Origin',
    //         author: 'Dan Brown'
    //     },
    //     {
    //         title: 'Ready Player One',
    //         author: 'Ernest Cline'
    //     }
    // ]

    // books.forEach((item) => {
    //     database.ref('books').push(item)
    // })

    // console.log(myBookList);

//Read Data -- using once() or on()

// database.ref('name')
//     .once('value')
//     .then((snapshot) => {
//         const data =snapshot.val();
//         console.log(data);
//     });

//Create Data -- using set()

// database.ref().set({
//       name: 'Chris Rasch',
//       age: 35,
//       location: {
//           city: 'Dallas',
//           country: 'United States'
//       }
//   }).then((data) => {
//     console.log('Data is saved!')
//   }).catch((err) => {
//     console.log(err);
//   })


//Remove Data -- using remove()

// database.ref().remove().then(() => console.log('Data was removed!')).catch((err) => console.log('Data could not be removed: ', err))
// console.log('after');
//   database.ref('age').set(40);
//   database.ref('location/city').set('St.Louis');

//   database.ref('attributes').set({
//       height: "5'10",
//       weight: 175
//   })


//Update Data -- using update()

// database.ref().update({age: 35, 'location/city': 'St.Louis'});
