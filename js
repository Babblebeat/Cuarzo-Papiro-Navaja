<!DOCTYPE html >
<html>

<body>

    <h2> Cuarzo, Papiro y Navaja </h2>

    <p>-CUARZO gana contra NAVAJA pero piede contra PAPIRO.</p>
    <P>-PAPIRO gana contra CUARZO pero pierde contra NAVAJA.</P>
    <P>-NAVAJA gana contra PAPIRO pero pierde contra CUARZO.</P>

    <script>
        function game(num) {

            if (num == 1) { ////// Cuarzo
                var count_hum = 1;
                ph1 = ("Escojes Cuarzo")

            } else if (num == 2) { ////// Papiro
                var count_hum = 2;
                ph1 = ("Escojes Papiro")

            } else if (num == 3) { ////// Navaja
                var count_hum = 3;
                ph1 = ("Escojes Navaja")

            }


            var count_bot = Math.floor(Math.random() * Math.floor(4));

            if (count_bot == 1) { ////// Cuarzo
                ph2 = (" y el bot escoje Cuarzo, ")

            } else if (count_bot == 2) { ////// Papiro
                ph2 = (" y el bot escoje Papiro, ")

            } else if (count_bot == 3) { ////// Navaja
                ph2 = (" y el bot escoje Navaja, ")

            } else if (count_bot == 0) {
                ph2 = (", pero el bot tiene miedo de contestar, por lo tanto ")
                ph3 = ("nadie gana D:")
            }


            if (count_bot !== 0) {

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

            }

            var result = ph1 + ph2 + ph3;
            document.getElementById("demo").innerHTML = result;
        }

        function changeResult() {
            document.getElementById("demo").innerHTML = "_";
        }
    </script>
    <p id="demo">_</p>
    <p>
        <button type="button" onclick="game(1)">Cuarzo</button>
        <button type="button" onclick="game(2)">Papiro</button>
        <button type="button" onclick="game(3)">Navaja</button>
    </p>

    <p>
        <button onclick="changeResult()">Reiniciar</button>
    </p>
</body>

</html>
