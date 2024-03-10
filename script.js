// player turn (x-turn or y-turn)
let turn = true;
let x_won = false;
let o_won = false;
let tie = false;
let strike_arr = [];    // for storing the striked buttons
let input_counter = 0;  // for tie detecting
let x_score = 0;
let y_score = 0;

let x_arr = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
];

let o_arr = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
];

function clicked(btn) {
    let btn_index = +btn.value;
    if (turn && btn.innerHTML == "") {
        btn.innerHTML = "X";
        turn = false;
        input_counter++;

        let row = Math.floor(btn_index/10);
        let col = Math.floor(btn_index%10);
        x_arr[row][col] = true;

        // --- winning conditions ---
        // row checking
        if(x_arr[row][0] && x_arr[row][1] && x_arr[row][2]) {
            x_won = true;
            strike_arr = [
                "btn" + row.toString() + "0",
                "btn" + row.toString() + "1",
                "btn" + row.toString() + "2"
            ];
        }

        // column checking
        if (x_arr[0][col] && x_arr[1][col] && x_arr[2][col]) {
            x_won = true;
            strike_arr = [
                "btn" + '0' + col.toString(),
                "btn" + '1' + col.toString(),
                "btn" + '2' + col.toString()
            ];
        }
            

        // diagonal check
        if (row == col) {
            if (x_arr[0][0] && x_arr[1][1] && x_arr[2][2]) {
                x_won = true;
                strike_arr = ["btn00", "btn11", "btn22"];
            }
            
            if (row == 1) {
                if (x_arr[0][2] && x_arr[1][1] && x_arr[2][0]) {
                    x_won = true;
                    strike_arr = ["btn02", "btn11", "btn20"];
                }  
            }
        }
        else {
            if (x_arr[0][2] && x_arr[1][1] && x_arr[2][0]) {
                x_won = true;
                strike_arr = ["btn02", "btn11", "btn20"];
            }
        }
    }
    else if(btn.innerHTML == "") {
        btn.innerHTML = "O";
        turn = true;
        input_counter++;

        let row = Math.floor(btn_index/10);
        let col = Math.floor(btn_index%10);
        o_arr[row][col] = true;

        // --- winning conditions ---
        // row checking
        if(o_arr[row][0] && o_arr[row][1] && o_arr[row][2]) {
            o_won = true;
            strike_arr = [
                "btn" + row.toString() + "0",
                "btn" + row.toString() + "1",
                "btn" + row.toString() + "2"
            ];
        }

        // column checking
        if (o_arr[0][col] && o_arr[1][col] && o_arr[2][col]) {
            o_won = true;
            strike_arr = [
                "btn" + '0' + col.toString(),
                "btn" + '1' + col.toString(),
                "btn" + '2' + col.toString()
            ];
        }
        
        // diagonal check
        if (row == col) {
            if (o_arr[0][0] && o_arr[1][1] && o_arr[2][2]) {
                o_won = true;
                strike_arr = ["btn00", "btn11", "btn22"];
            }
            
            if (row == 1) {
                if (o_arr[0][2] && o_arr[1][1] && o_arr[2][0]) {
                    o_won = true;
                    strike_arr = ["btn02", "btn11", "btn20"];
                }
            }
        }
        else {
            if (o_arr[0][2] && o_arr[1][1] && o_arr[2][0]) {
                o_won = true;
                strike_arr = ["btn02", "btn11", "btn20"];
            }
        }
    }

    // tie
    if ((input_counter == 9) && !x_won && !o_won)
        tie = true;

    // win or tie
    if (x_won || o_won || tie) {
        if (x_won) {
            x_score++;
            document.getElementById("x-score").innerHTML = x_score;

            // winning animation
            document.getElementById(strike_arr[0]).style.animation = "btn-anim 0.5s ease 0s 1 normal both";
            document.getElementById(strike_arr[1]).style.animation = "btn-anim 0.5s ease 0.25s 1 normal both";
            document.getElementById(strike_arr[2]).style.animation = "btn-anim 0.5s ease 0.5s 1 normal both";
            
            // popup
            document.getElementById("popup-prompt").innerHTML = "X has won!"
            document.getElementById("popup").style.animation = "popup-anim 0.3s ease 1s 1 normal both";
            document.getElementById("popup-prompt").style.animation = "prompt-anim 0.3s ease 1s 1 normal both";
            document.getElementById("popup-button").style.animation = "popup-btn-anim 0.3s ease 1s 1 normal both";
        }
        else if (o_won) {
            y_score++;
            document.getElementById("y-score").innerHTML = y_score;

            // winning animation
            document.getElementById(strike_arr[0]).style.animation = "btn-anim 0.5s ease 0s 1 normal both";
            document.getElementById(strike_arr[1]).style.animation = "btn-anim 0.5s ease 0.25s 1 normal both";
            document.getElementById(strike_arr[2]).style.animation = "btn-anim 0.5s ease 0.5s 1 normal both";

            // popup 
            document.getElementById("popup-prompt").innerHTML = "Y has won!"
            document.getElementById("popup").style.animation = "popup-anim 0.3s ease 1s 1 normal both";
            document.getElementById("popup-prompt").style.animation = "prompt-anim 0.3s ease 1s 1 normal both";
            document.getElementById("popup-button").style.animation = "popup-btn-anim 0.3s ease 1s 1 normal both";
        }
            
        else {
            // tie animation
            document.getElementById("btn11").style.animation = "btn-anim 0.5s ease 0s 1 normal both";

            document.getElementById("btn01").style.animation = "btn-anim 0.5s ease 0.25s 1 normal both";
            document.getElementById("btn10").style.animation = "btn-anim 0.5s ease 0.25s 1 normal both";
            document.getElementById("btn12").style.animation = "btn-anim 0.5s ease 0.25s 1 normal both";
            document.getElementById("btn21").style.animation = "btn-anim 0.5s ease 0.25s 1 normal both";
            
            document.getElementById("btn00").style.animation = "btn-anim 0.5s ease 0.5s 1 normal both";
            document.getElementById("btn02").style.animation = "btn-anim 0.5s ease 0.5s 1 normal both";
            document.getElementById("btn20").style.animation = "btn-anim 0.5s ease 0.5s 1 normal both";
            document.getElementById("btn22").style.animation = "btn-anim 0.5s ease 0.5s 1 normal both";

            // popup
            document.getElementById("popup-prompt").innerHTML = "It's a tie!"
            document.getElementById("popup").style.animation = "popup-anim 0.3s ease 1s 1 normal both";
            document.getElementById("popup-prompt").style.animation = "prompt-anim 0.3s ease 1s 1 normal both";
            document.getElementById("popup-button").style.animation = "popup-btn-anim 0.3s ease 1s 1 normal both";
        }
    }
}

function reset() {
    turn = true;
    x_won = false;
    o_won = false;
    strike_arr = [];
    tie = false;
    input_counter = 0;

    x_arr = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    o_arr = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    // reseting the buttons
    document.getElementById("btn00").innerHTML = "";
    document.getElementById("btn01").innerHTML = "";
    document.getElementById("btn02").innerHTML = "";
    document.getElementById("btn10").innerHTML = "";
    document.getElementById("btn11").innerHTML = "";
    document.getElementById("btn12").innerHTML = "";
    document.getElementById("btn20").innerHTML = "";
    document.getElementById("btn21").innerHTML = "";
    document.getElementById("btn22").innerHTML = "";

    document.getElementById("popup").style.animation = "popup-anim-rev 0.3s ease 0s 1 normal both";
    document.getElementById("popup-prompt").style.animation = "prompt-anim-rev 0.3s ease 0s 1 normal both";
    document.getElementById("popup-button").style.animation = "popup-btn-anim-rev 0.3s ease 0s 1 normal both";

    document.getElementById("btn00").style.animation = "btn-anim-rev 0s ease 0s 1 normal both";
    document.getElementById("btn01").style.animation = "btn-anim-rev 0s ease 0s 1 normal both";
    document.getElementById("btn02").style.animation = "btn-anim-rev 0s ease 0s 1 normal both";
    document.getElementById("btn10").style.animation = "btn-anim-rev 0s ease 0s 1 normal both";
    document.getElementById("btn11").style.animation = "btn-anim-rev 0s ease 0s 1 normal both";
    document.getElementById("btn12").style.animation = "btn-anim-rev 0s ease 0s 1 normal both";
    document.getElementById("btn20").style.animation = "btn-anim-rev 0s ease 0s 1 normal both";
    document.getElementById("btn21").style.animation = "btn-anim-rev 0s ease 0s 1 normal both";
    document.getElementById("btn22").style.animation = "btn-anim-rev 0s ease 0s 1 normal both";
}