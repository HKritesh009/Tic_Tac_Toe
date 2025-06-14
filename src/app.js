let boxes = document.querySelectorAll(".box");
const gamebox = document.querySelector(".game");
let btn = document.querySelector(".btn");
let msg = document.querySelector("h2");

let Turn = true;   // turn true means plyr1 and false means player 2

const winpattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {


        if (Turn) {
            box.innerHTML = `X`;
            box.style.backgroundColor = "rgba(253, 161, 12, 0.97)";
            Turn = false;
        }
        else {
            box.innerHTML = `O`;
            Turn = true;
            box.style.backgroundColor = "rgba(12, 185, 253, 0.774)";
        }
        box.style.pointerEvents = "none";
        checkWinner();
    });
})

const checkWinner = () => {
      let count = 1;
    for (pattern of winpattern) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") {
            count++;
            if(count>=9){
                console.log("Its tie");
                msg.innerText="Its A Draw!! play Again";
                msg.classList.remove('hide');
            }
            console.log(count);
            if (p1 == p2 && p1 == p3) {
                console.log("winner Got it");
                console.log("winner is :", p1);
                Display(p1);
                disbaleboxes();
            }
        }

    }
}

function disbaleboxes() {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none";
    })
}
function enableboxes() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
        box.style.backgroundColor = "white";
    })
}


btn.addEventListener("click", () => {
    Turn = 0;
    enableboxes();
    msg.classList.add('hide');
});

function Display(p) {
    msg.innerText = ` ${p} is Winner Hurray!!`;
    msg.classList.remove('hide');
}