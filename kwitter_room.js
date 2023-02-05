
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyD1Uh6vwQKKX08B0OvgS34N29fKZBBLJvU",
  authDomain: "gwitter-7df77.firebaseapp.com",
  databaseURL: "https://gwitter-7df77-default-rtdb.firebaseio.com",
  projectId: "gwitter-7df77",
  storageBucket: "gwitter-7df77.appspot.com",
  messagingSenderId: "13095728883",
  appId: "1:13095728883:web:fecdd59273fa679fd9e986"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
