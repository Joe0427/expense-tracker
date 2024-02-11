document.addEventListener("DOMContentLoaded", event =>{
    const app = firebase.app();
});

function uploadFile(files){
    const storageRef = firebase.storage().ref();
    const horseRef = storageRef.child('horse.jpg');

    const file = files.item(0);

    const task = horseRef.put(file);

    task.then(snapshot => {
        console.log(snapshot)
        const url = snapshot.downloadUrl
        document.addEventListener("DOMContentLoaded", event =>{
            document.querySelector('#imgUpload'.setAttribute('src',url))
        });
    })
}