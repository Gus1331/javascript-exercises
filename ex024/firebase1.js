firebase.initializaApp(firebaseConfig);

let db = firebase.firestore();

db.collection("class 80'").get().then(readData(snapshot));

function readData(snapshot){
    snapshot.forEach((doc) => {
        console.log(doc);
    })
}