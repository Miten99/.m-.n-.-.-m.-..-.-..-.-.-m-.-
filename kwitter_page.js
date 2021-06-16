var firebaseConfig = {
      apiKey: "AIzaSyDHnmNHS90v1paHOTcxQ6vL3WzlVK5gl-I",
      authDomain: "website-project-aaf0b.firebaseapp.com",
      databaseURL: "https://website-project-aaf0b-default-rtdb.firebaseio.com",
      projectId: "website-project-aaf0b",
      storageBucket: "website-project-aaf0b.appspot.com",
      messagingSenderId: "742291424009",
      appId: "1:742291424009:web:a2087ca8f7b4a70c0d49d8"
  }
  firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem ("user_name");
room_name = localStorage.getItem ("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter_login.html");
      
}