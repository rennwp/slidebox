let box = document.getElementById("box");
let enemy = document.getElementById("enemy");
let scoreText = document.getElementById("score");
const restart = document.getElementById("restart");
const ganti = document.getElementById("ganti");
const music = document.getElementById("music");
const lofi = document.getElementById("lofi");
const skin0 = document.getElementById("skin0");
const skin1 = document.getElementById("skin1");
const skin2 = document.getElementById("skin2");
const skin3 = document.getElementById("skin3");
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav")
let valuex = 500;
let valuey = 100;
let score = 0;
let pertanyaan = true;
let userInput = NaN;
let keputusan = true;


while (keputusan) {
    userInput = parseInt(prompt("target score berapa?, rekomendasi 100"), 10)
    if (userInput > 0) {
        keputusan = false;
        lofi.play();
    } else {
        alert("error, input bukan angka !")
    }

}

music.addEventListener("click", function () {
    if (lofi.classList.contains("start")) {
        lofi.pause();
        lofi.classList.toggle("stop");
        lofi.classList.toggle("start");
    } else if (lofi.classList.contains("stop")) {
        lofi.play();
        lofi.classList.toggle("start");
        lofi.classList.toggle("stop");
    }

})

box.style.left = valuex + "px"
box.style.top = valuey + "px";

document.addEventListener("keydown", function (e) {
    if (e.key == "d") {
        if (valuex == 800) {
            return;
        }
        valuex += 100;
        box.style.left = valuex + "px";
    } else if (e.key == "a") {
        if (valuex == 0) {
            return;
        }
        valuex -= 100;
        box.style.left = valuex + "px";
    } else if (e.key == "s") {
        if (valuey == 400) {
            return;
        }
        valuey += 100;
        box.style.top = valuey + "px";
    } else if (e.key == "w") {
        if (valuey == 0) {
            return;
        }
        valuey -= 100;
        box.style.top = valuey + "px";
    }

})

let valueenemy = 0;
let valueyenemy = 480;
setInterval(function () {
    valueenemy = Math.floor(Math.random() * 10)
    valueenemy *= 100;
    enemy.style.left = valueenemy + "px";
    valueyenemy = 480;
}, 1000)

setInterval(() => {
    valueyenemy -= 20
    enemy.style.top = valueyenemy + "px";
}, 35);

setInterval(() => {
    if (box.style.top == enemy.style.top) {
        if (valueenemy >= valuex && valueenemy <= valuex + 120) {

            valueyenemy = 0;

            score += 10;
            mati();
            scoreText.innerHTML = score;
        }

    }
}, 35);

// SKIN LIST

skin0.addEventListener("click", function () {
    box.classList.remove("skin1", "skin2", "skin3");
    box.classList.add("skin0")
})

skin1.addEventListener("click", function () {
    box.classList.remove("skin0", "skin2", "skin3");
    box.classList.add("skin1")
})

skin2.addEventListener("click", function () {
    box.classList.remove("skin1", "skin0", "skin3");
    box.classList.add("skin2")
})

skin3.addEventListener("click", function () {
    box.classList.remove("skin1", "skin2", "skin0");
    box.classList.add("skin3")
})

// AKHIR SKIN LIST


restart.addEventListener("click", function () {
    box.style.display = "block";
    enemy.style.display = "block";
    score = 0;
    scoreText.innerHTML = score;
})

ganti.addEventListener("click", function () {
    keputusan = true;
    while (keputusan) {
        userInput = parseInt(prompt("target score berapa?, rekomendasi 100"), 10)
        if (userInput > 0) {
            keputusan = false;
        } else {
            alert("error, input bukan angka !")
        }
    }

})

function mati() {
    if (score == userInput) {

        keputusan = confirm("Bagus !! kamu mendapatkan score : " + score + ", ulangi?");
        if (keputusan == true) {
            score = 0;
        } else {
            box.style.display = "none";
            enemy.style.display = "none";
        }
    }
}


// HAMBURGER

hamburger.addEventListener("click", function () {
    nav.classList.toggle("navclose");
    console.log("oke")
});

// AKHIR HAMBURGER