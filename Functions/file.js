let price = 9
let ticket_no = 5


if(ticket_no<=2){
    console.log("inside 1") 
    document.write("Actual cost per ticket : $9" )
    document.write("<br>")
    document.write("more than 2 seats are eleigible for festive discount")
    document.write("<br>")
    document.write("Amount pyabble is : "+calculateCost(ticket_no)-calculateDiscount(ticket_no))

}else if(ticket_no>=6){
    console.log("inside 2")
    document.write("<br>")
    document.write("Booking not allowed")
    document.write("<br>")

}else{
    document.write("Actual cost per ticket : $9" )
    document.write("<br>")
    document.write(ticket_no+" seats are eleigible for festive discount")
    document.write("<br>")
    const ds = [5,7,9,11,13]
    for(i=1;i<=ticket_no;i++){
        document.write(ds[i-1] +"% discount! on ticket "+(i))
        document.write("<br>")
    }
    document.write("Amount pyabble is : "+(calculateCost(ticket_no)-calculateDiscount(ticket_no)))

}
function calculateCost(seats){

    return price*seats

}

function calculateDiscount(seats){
    if(seats<=2){
        return 0
    }else{
    let dscnt =0
    const ds = [5,7,9,11,13]
    for(i=0;i<seats;i++){
        dscnt += ((price*ds[i])/100)
    }
    console.log(dscnt)
    return dscnt
    }
}