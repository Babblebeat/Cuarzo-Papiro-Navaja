
///////////////////////////////////////////////////////////////////
function machine(num) {
    var count_hum = num;
    var count_bot = Math.floor(Math.random() * Math.floor(3)) + 1;

    switch (count_bot) {
        case 1:
            second_string = ("El bot escoje Cuarzo: ");
            break;
        case 2:
            second_string = ("El bot escoje Papiro: ");
            break;

        case 3:
            second_string = ("El bot escoje Navaja: ");
            break;
    }

    if (count_hum == 3 && count_bot == 1) {
        third_string = ("Tú pierdes.")

    } else if (count_hum == 1 && count_bot == 3) {
        third_string = ("Tú ganas.")

    } else if (count_hum < count_bot) {
        third_string = ("Tú pierdes.")

    } else if (count_hum > count_bot) {
        third_string = ("Tú ganas.")

    } else if (count_hum == count_bot) {
        third_string = ("Empate.")

    }
    var machine_say = second_string + third_string;
    return machine_say;
}
//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
function game(num) {
    
    var x = num;
    var count_hum
    switch (x) {
        case 1:
            count_hum = 1;
            first_string = ("Escojes Cuarzo, ")
            break;

        case 2:
            count_hum = 2;
            first_string = ("Escojes Papiro, ")
            break;

        case 3:
            count_hum = 3;
            first_string = ("Escojes Navaja; ")
            break;
    }
    var final_1 = Number(count_hum);
    var final_2 = String(first_string);
    
    document.getElementById("bot").innerHTML = final_2 + machine(final_1);
}
/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function reset() {
    document.getElementById("bot").innerHTML = "_";
}