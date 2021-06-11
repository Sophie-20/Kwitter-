//YOUR FIREBASE LINKS
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



var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send(){
    var msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
       
});
document.getElementById("message").value=" ";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    

    
//Start code
console.log(firebase_message_id);
console.log(message_data);

name = message_data['name'];
message=  message_data['message'];
like= message_data['like'];

name_with_tag="<h4> "+name+" <imag src='tick.png' class='user_name'></h4>"
message_with_tag="<h4 class='message_h4'>"+message+" </h4>"
like_with_tag=" <button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'> <span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span> </button>"

row = name_with_tag+message_with_tag+like_with_tag
document.getElementById("output").innerHTML+=row;

//End code
 } });  }); }
 
getData();

function updatelike(messageid){
  console.log("Clicked On The Like Button"+messageid);
  buttonid=messageid;
  like=document.getElementById(buttonid).value;
  updatedlike= Number(like)+1;
  console.log(updatedlike);
  firebase.database().ref(room_name).child(messageid).update({
    like: updatedlike
});
}


function logout() {
    localStorage.removeItem('user_name')
    localStorage.removeItem('room_name')
    window.location='index.html'
  }

  