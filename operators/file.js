// Write JavaScript code to do online booking of theatre tickets and calculate the total price, 
// considering the price per ticket as $9. Also, apply a festive season discount of 10% and 
// calculate the discounted amount. 

let price=9
let seats_booked=3;
let costs_of_tickets=price*seats_booked;
let discount=10;
let final_price=costs_of_tickets-(costs_of_tickets*0.1);
document.write("Total no of seats booked: " +seats_booked);
document.write("<br>");
document.write("Total costs of 3 Tickets:$" +costs_of_tickets);
document.write("<br>");
document.write("Festive Season Discount is:" +discount);
document.write("<br>");
document.write("Total cost after discount is:" +final_price);