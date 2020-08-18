

function human(num) {
    var x = num;

    switch (x) {
        case 1:
            var count_hum = 1;
            ph1 = ("Escojes Cuarzo")

            break;

        case 2:
            var count_hum = 2;
            ph1 = ("Escojes Papiro")
            break;

        case 3:
            var count_hum = 3;
            ph1 = ("Escojes Navaja")
            break;
    }
    var final = Number(count_hum);
    document.getElementById("human").innerHTML = final;
}

///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
function bot() {
    var count_hum = document.getElementById("human").innerHTML;
    //that start the "random machine bot"
    var count_random = Math.floor(Math.random() * Math.floor(3));
    //this is a special random machine, Only allowed numbers 0-3

    switch (count_random) {
        case 0:
            ph2 = (" y el bot escoje Cuarzo, ");
            count_bot = 1;
            break;
        case 1:
            ph2 = (" y el bot escoje Papiro, ");
            count_bot = 2;
            break;

        case 2:
            ph2 = (" y el bot escoje Navaja, ");
            count_bot = 3;
            break;
    }
    // end random machine bot
    var final = Number(count_hum) + Number(count_bot);
    document.getElementById("bot").innerHTML = final;
}
///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
function final() {
    if (count_bot !== 0) {

        if (count_hum == 3 && count_bot == 1) {
            ph3 = ("Tú pierdes.")
            rest = 1;

        } else if (count_hum == 1 && count_bot == 3) {
            ph3 = ("Tú ganas.")


        } else if (count_hum < count_bot) {
            ph3 = ("Tú pierdes.")


        } else if (count_hum > count_bot) {
            ph3 = ("Tú ganas.")


        } else if (count_hum == count_bot) {
            ph3 = ("Empate.")

        }
    }
}
/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
function reset() {
    document.getElementById("bot").innerHTML = "_";
}
