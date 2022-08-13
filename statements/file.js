let price = 9
let ticket_no = 3

if(ticket_no<=2){
    document.write("Ticket for Customer 1 gets 0% discount, cost is : $" +price);
    document.write("<br>");
    document.write("Ticket for Customer 2 gets 0% discount, cost is : $" +price);
    document.write("<br>")
    document.write("For "+ticket_no+ " tickets you need to pay : $" +price*ticket_no);
    document.write("<br>")
    document.write("book extra ticket to get discount on you booking")
}

if(ticket_no>2 & ticket_no<=5){
    document.write("Ticket for Customer 1 gets 5% discount, cost is : $" +price*.95);
    document.write("<br>");
    document.write("Ticket for Customer 2 gets 7% discount, cost is : $" +price*.93);
    document.write("<br>")
    document.write("Ticket for Customer 3 gets 9% discount, cost is : $" +price*.91);
    document.write("<br>")
    document.write("Ticket for Customer 4 gets 11% discount, cost is : $" +price*.89);
    document.write("<br>")
    document.write("For "+ticket_no+ " tickets you need to pay : $" +price*(.95+.93+.91+.89) +" instead of $"+price*ticket_no);
    
}