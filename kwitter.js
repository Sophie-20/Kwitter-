function login(){
     var login = document.getElementById("username").value;
    localStorage.setItem("user_name",login);
    window.location="kwitter_room.html";
    
}