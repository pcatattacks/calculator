window.onload = function() {

    var result = null;
    var lastop = null; //global variable that stores calculator results
    var isoperated = false;
    //var numcount = 0;

    var display = document.getElementById("output");
    var operator = document.getElementById("operator");

    for (var i = 0; i < 10; i++) {
        //console.log("test"); //debugging statement
        var button = document.getElementById("button-"+i);
        button.onclick = function(e) {
            //window.alert("onclick executed"); //for debugging
            if (display.innerHTML.length < 15) {
                //numcount++;
                if (display.innerHTML==='0' || isoperated) {
                    display.innerHTML = e.target.id.substring(7);
                    isoperated = false;
                }
                else { display.innerHTML += e.target.id.substring(7); }
            }
        };
    }

    var c = document.getElementById("button-C");
    c.onclick = function(e) {
        display.innerHTML = 0;
        operator.innerHTML = "";
        result = null;
        lastop = null;
    }
    var dot = document.getElementById("button-dot");
    dot.onclick = function(e) {
        if (!display.innerHTML.includes('.')) {
            display.innerHTML += ".";
        }
    }
    var plusmn = document.getElementById("button-plusmn");
    plusmn.onclick = function(e) {
        if (display.innerHTML[0] === '-') {
            //console.log(display.innerHTML[0]); //debugging statement
            //display.innerHTML[0] = "";
            display.innerHTML  = display.innerHTML.substring(1);
        }
        else if (parseFloat(display.innerHTML) !== 0.0) {
            display.innerHTML = "-" + display.innerHTML;
        } 
    }

    var plus = document.getElementById("button-plus");
    var minus = document.getElementById("button-minus");
    var divide = document.getElementById("button-divide");
    var times = document.getElementById("button-times");
    var equals = document.getElementById("button-equals");

    plus.onclick = function(e) {
        //if (numcount%2 == 0) {equals.onclick();}
        if(!isoperated) {equals.onclick();}
        isoperated = true;
        lastop = "plus";
        operator.innerHTML = e.target.innerHTML;
        if (result == null) {result = 0;}
        var store = parseFloat(display.innerHTML);
        result = store;
    }
    minus.onclick = function(e) {
        //if (numcount%2 == 0) {equals.onclick();}
        if(!isoperated) {equals.onclick();}
        isoperated = true;
        lastop = "minus";
        operator.innerHTML = e.target.innerHTML;
        if (result == null) {result = 0;}
        var store = parseFloat(display.innerHTML);
        result = store;
    }
    times.onclick = function(e) {
        //if (numcount%2 == 0) {equals.onclick();}
        if(!isoperated) {equals.onclick();}
        isoperated = true;
        lastop = "times";
        operator.innerHTML = e.target.innerHTML;
        if (result == null) {result = 1;}
        var store = parseFloat(display.innerHTML);
        result = store;
    }
    divide.onclick = function(e) {
        //if (numcount%2 == 0) {equals.onclick();}
        if(!isoperated) {equals.onclick();}
        isoperated = true;
        lastop = "divide";
        operator.innerHTML = e.target.innerHTML;
        if (result == null) {result = 0;}
        var store = parseFloat(display.innerHTML);
        result = store;
    }
    equals.onclick = function(e) {
        //console.log(lastop); //debugging statement
        if (lastop == null) { 
            result = parseFloat(display.innerHTML);
        }
        if (lastop == "plus") {
            result += parseFloat(display.innerHTML);
        }
        else if (lastop == "minus") {
            result -= parseFloat(display.innerHTML);
        }
        else if (lastop == "times") {
            result *= parseFloat(display.innerHTML);
        }
        else if (lastop == "divide") {
            result /= parseFloat(display.innerHTML);
        }
        //console.log(result); //debugging statement
        //console.log(typeof(result));
        if (result === Infinity) {
            display.innerHTML = "Not a number";
        } else {
            display.innerHTML = result;
        }
        operator.innerHTML = "";
        isoperated = true;

    }
 
}

