$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAPM9VSkPlnS9xqDaqiVCWnK3QD236WJnM",
    authDomain: "project-1085-d09ef.firebaseapp.com",
    databaseURL: "https://project-1085-d09ef.firebaseio.com",
    projectId: "project-1085-d09ef",
    storageBucket: "project-1085-d09ef.appspot.com",
    messagingSenderId: "81258629142"
  };
  firebase.initializeApp(config);
  console.log(config);
//   Variable created to ref DB //
  var database = firebase.database();
// Capture Submit button 
    $("#add-user").on("click", function(event){
        event.preventDefault();
        var name = $("#name-input").val()
        var destination = $("#destination-input").val()
        var time = $("#time-input").val()
        var frequency = $("#frequency-input").val()

        database.ref().push({
            name: name,
            destination: destination,
            time: time,
            frequency: frequency,
        })
    });
database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().time);
    console.log(childSnapshot.val().frequency);

    var away = childSnapshot.val().frequency;
    var format = "hh:mm"
    var military = childSnapshot.val().time
    var arrival = moment( military, format)

    // Full list of items to the table 
 
    $(".display").append("<tr><th id='name'>" + childSnapshot.val().name + 
    "</th><td class='destination'>" + childSnapshot.val().destination + 

    "</td><td class='date'>" + childSnapshot.val().destination + 
    "</td><td class='months'>" + childSnapshot.val().frequency + 
    "</td><td class='pay'>" + moment(arrival). format("hh:mm A") + 
    "</td><td class='paid'>" + moment().diff(moment(arrival), "mm") + "</td></tr>")
});
});
// hh:mm A