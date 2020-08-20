
function human(num) {
    var x = num;
    var count_hum
    switch (x) {
        case 1:
            count_hum = 1;

            ph1 = ("Escojes Cuarzo")

            break;

        case 2:
            count_hum = 2;

            ph1 = ("Escojes Papiro")
            break;

        case 3:
            count_hum = 3;
            ph1 = ("Escojes Navaja")
            break;
    }
    var final_1 = Number(count_hum);
    document.getElementById("human_say").innerHTML = final_1;
    document.getElementById("human").innerHTML = ph1;

}

///////////////////////////////////////////////////////////////////
function machine(num) {
    var count_hum = num;
    var count_bot = Math.floor(Math.random() * Math.floor(3)) + 1;

    switch (count_bot) {
        case 1:
            ph2 = ("El bot escoje Cuarzo, ");
            break;
        case 2:
            ph2 = ("El bot escoje Papiro, ");
            break;

        case 3:
            ph2 = ("El bot escoje Navaja, ");
            break;
    }

    if (count_hum == 3 && count_bot == 1) {
        ph3 = ("Tú pierdes.")

    } else if (count_hum == 1 && count_bot == 3) {
        ph3 = ("Tú ganas.")

    } else if (count_hum < count_bot) {
        ph3 = ("Tú pierdes.")

    } else if (count_hum > count_bot) {
        ph3 = ("Tú ganas.")

    } else if (count_hum == count_bot) {
        ph3 = ("Empate.")

    }
    var machine_say = ph2 + ph3;
    return machine_say;
}
//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
function game() {


    var count_hum = document.getElementById("human_say").innerHTML;
    
    document.getElementById("bot").innerHTML = machine(count_hum);
}

function reset() {
    document.getElementById("bot").innerHTML = "_";
}

