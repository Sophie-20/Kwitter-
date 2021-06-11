// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyB67exVIYfeNFPXPZVnN-tkHmb1CuwmQlw',
  authDomain: 'kwitter-25a5a.firebaseapp.com',
  databaseURL: 'https://kwitter-25a5a-default-rtdb.firebaseio.com',
  projectId: 'kwitter-25a5a',
  storageBucket: 'kwitter-25a5a.appspot.com',
  messagingSenderId: '921942965827',
  appId: '1:921942965827:web:22814562637027d7929ef6',
  measurementId: 'G-S54C08V5R5',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

user_name = localStorage.getItem('user_name')
document.getElementById('user_name').innerHTML = 'Welcome' + user_name

function getData() {  firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = " ";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key
        Room_names = childKey;
        console.log("Room Name"+Room_names)
        row = "<div class='room_name' id= "+ Room_names +" onclick='redirectToRoomName(this.id)' >#"+ Room_names +" </div>"
        document.getElementById("output").innerHTML+=row;
        
      })
    })
}
getData()

function redirectToRoomName(name) { console.log(name);
  localStorage.setItem("room_name", name); window.location = "kwitter_page.html";
  }
  
function logout() {
  localStorage.removeItem('user_name')
  localStorage.removeItem('room_name')
  window.location=('index.html')
}

function add_room() {
  var roomname = document.getElementById("room_name").value
  firebase.database().ref("/").child(roomname).update({
    purpose: 'Adding Room Name'
  })
  localStorage.setItem("room_name", roomname)
  window.location= "kwitter_page.html"
}

