
const firebaseConfig = {
    apiKey: "AIzaSyDnd-n-QQKP-SZ-iSv20B2ZVrUUJ__SmEI",
    authDomain: "abe-yaar.firebaseapp.com",
    databaseURL: "https://abe-yaar-default-rtdb.firebaseio.com",
    projectId: "abe-yaar",
    storageBucket: "abe-yaar.appspot.com",
    messagingSenderId: "701043005888",
    appId: "1:701043005888:web:47629ec10980937f821025"
  }; firebase.initializeApp(firebaseConfig);

  function Add_User()
  {
      add_user = document.getElementById("user_name").value;
      firebase.database().ref("/").child(add_user).update({
          purpose = "adding user"
      });
  }