window.onload = function() {
    var goalNumber = Math.floor(Math.random() * 101 + 19);

    var number1 = Math.floor(Math.random() * 11 + 1);
    var number2 = Math.floor(Math.random() * 11 + 1);
    var number3 = Math.floor(Math.random() * 11 + 1);
    var number4 = Math.floor(Math.random() * 11 + 1);

    var myTotal = 0;
    var wins = 0;
    var losses = 0;


    $("#numberWins").html(wins);
    $("#numberLosses").html(losses);

    $("#one").on("click", function() {
        myTotal = myTotal + number1;
        $("#finalTotal").html(myTotal);

        if (myTotal === Random) {
            winner();
        } else {
            loser();
        }
    })

    $("#two").on("click", function() {
        myTotal = myTotal + number2;
        $("#finalTotal").html(myTotal);

        if (myTotal === Random) {
            winner();
        } else {
            loser();
        }
    })

    $("#three").on("click", function() {
        myTotal = myTotal + number3;
        $("#finalTotal").html(myTotal);

        if (myTotal === Random) {
            winner();
        } else {
            loser();
        }
    })

    $("#four").on("click", function() {
        myTotal = myTotal + number4;
        $("#finalTotal").html(myTotal);

        if (myTotal === Random) {
            winner();
        } else {
            loser();
        }
    })

    function winner() {
        alert("You won!");
        wins++;
        $("#numberWins").html(wins);
        reset();
    }

    function loser() {
        alert ("You lose!");
        losses++;
        $("#numberLosses").html(losses);
        reset();
    }

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        $("#randomNumber").html(Random);
        var number1 = Math.floor(Math.random() * 11 + 1);
        var number2 = Math.floor(Math.random() * 11 + 1);
        var number3 = Math.floor(Math.random() * 11 + 1);
        var number4 = Math.floor(Math.random() * 11 + 1);
        myTotal = 0;
        $("#finalTotal").html(myTotal);
    }
}