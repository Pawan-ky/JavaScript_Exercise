function eat() {

    document.getElementById('p1').innerHTML = "Click to Re-fill!";
    document.body.attributes[0].value = "background-color:lightgreen;text-align:center";
    document.getElementById('hdr1').innerHTML = "Hope you liked it";
    document.getElementById("img1").attributes[1].value = "empty.png";
    document.getElementById('p1').attributes[1].value = "fill()";
    }
function fill() {
document.body.attributes[0].value = "background-color:lightblue;text-align:center";
document.getElementById('hdr1').innerHTML = "Here's a re-filled cone!";
document.getElementById("img1").attributes[1].value = "filled.png";
document.getElementById('p1').innerHTML = "Enjoy yourself!";
document.getElementById('p1').attributes[1].value = "eat()";
}