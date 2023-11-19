//hotel registration --- store in an object
var test = {
hotelname: "Marriot",
room: 456,
booked: 145,
display: function(){
    return this.hotelname;}
};

// access the properties / change the properties 
consol.log(test.hotelname);
console.log(test.booked);
test.booked = 147;

//start the Hotel Reservation
var guestgroup = [];
function reservation(){
 //get the values from the form and put it in the object
 //complete the object
 var guest = {
name: $('#name').val(),
numberofGuest: $('number').val(),
checkin: $('#checkin').val(),
checkout: $('#checkout').val(),
roomtype: $('roomtype').val()
 };

 //push object into array
 guestgroup.push(guest);
 console.log(guest)
 alert("thank you for your reservation ")


}


function displayList(){
    $("#guestlist").html("");
    $("#guestlist").append("<table>");
    for(var i in guesttgroup){
        $("#guestlist").append("<tr><td>"+ guestgroup[i].name+"</td>");
        $("#guestlist").append("<td>"+ guestgroup[i].numberofGuest+"</td>");
        $("#guestlist").append("<td>"+guestgroup[i].checkin+"</td><tr>");
    }
    $("#guestlist").append("</table>");
   
}







//Register the event handler
$('#submit').click(reservation);
$('#list').click(displayList);