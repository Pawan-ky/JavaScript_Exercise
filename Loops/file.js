let price = 9
let ticket_no = 5

if(ticket_no<=2){
    for(i =1;i<=ticket_no;i++){
        document.write("Ticket for Customer "+i+" gets 0% discount, cost is : $" +price*ticket_no);
        document.write("<br>");
    }

    document.write("book extra ticket to get discount on you booking")
}else if(ticket_no>6){
    document.write("Booking not allowed")
}else{
    const ds = [5,7,9,11]
    let pc = 0
    for(i =3;i<=ticket_no;i++){
        pc +=(price*(100-ds[i-3]))/100
        console.log(pc)
        document.write("Ticket for Customer "+(i-2)+" gets "+ds[i-3]+"% discount, cost is : $" +(price*(100-ds[i-3]))/100);
        document.write("<br>");
    }
    document.write("For "+ticket_no+ " tickets you need to pay : $" + pc+" instead of $"+price*ticket_no);

}
