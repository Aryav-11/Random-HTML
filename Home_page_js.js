function macDidIt() {
    document.getElementById('demo_p').innerHTML =
        "I Did Javascript Here You See It.";
}

window.alert("Yeah! I Did It.");

function Adder() {
    var a = Math.floor((Math.random() * 100) + 1);
    var b = Math.floor((Math.random() * 100) + 1);
    var c = a + b;

    document.getElementById('demo_p1').innerHTML = c;
}