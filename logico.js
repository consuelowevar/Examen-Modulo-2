var time = 10;
var score = 0;
const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];
function randomWords() {
    var palabraAleatoria = words[Math.floor(Math.random() * words.length)]
    return palabraAleatoria
}


var body = document.querySelector("body")

function addToDom() {
    document.getElementById("randomWord").innerHTML = randomWords();
    console.log(document.getElementById("randomWord").innerHTML = randomWords());
    
}
body.setAttribute("onload", "addToDom()")


//Funcional ^
document.getElementById("text").addEventListener("change", revisar);
function revisar() {
    var palabraIngresada = document.getElementById("text").value;
    if (palabraIngresada == document.getElementById("randomWord").innerHTML) {
        //alert("BIEN")
        document.getElementById("text").value = "";
        updateScore();
        actualizarTiempo();
    } else {
        //alert("No coincide")
        document.getElementById("text").value = "";
    }
    return addToDom();
}
var timeInterval = setInterval(function () {
    if (time > 0) {
        time--;
        console.log(time);
        document.getElementById("timeSpan").innerHTML = time;
    } else {
        clearInterval(timeInterval)
        gameOver();
    }
    
}, 1000);

function actualizarTiempo() {
    time = parseInt(document.getElementById("timeSpan").innerHTML);
    time += 3;
    document.getElementById("timeSpan").innerHTML = time;
}
function updateScore() {
    //algo que agregar en la linea comentario
    var score = parseInt(document.getElementById("score").innerHTML);
    var score = score + 1;
    document.getElementById("score").innerHTML = score;
    /*
    if (revisar() == true) {
        var score = parseInt(document.getElementById("score").innerHTML);
        console.log(score)
        score++
        console.log(score)
        document.getElementById("score").innerHTML = score;
    } else {
    }
    var score = document.getElementById("score");
    return score.innerHTML = updateScore
    */
}
function gameOver() {
    var hache1 = document.createElement("h1")
    var parrafo1 = document.createElement("p")
    var btn1 = document.createElement("button")
    var divGameOver = document.getElementById("end-game-container")


    hache1.textContent = "GAME OVER"

    parrafo1.textContent = "TU PUNTAJE ES: "+document.getElementById("score").innerHTML;

  
    btn1.setAttribute("onclick", "location.reload()")
    btn1.textContent = "Volver a Empezar"
    btn1.classList.add("boton");

    /*Posibilidad #1
    parrafo1
    btn1
    /*Posibilidad #2
    hache1.classList= ""
    */
    var gameOver = document.getElementById("end-game-container");
    gameOver.appendChild(hache1)
    gameOver.appendChild( parrafo1)
    gameOver.appendChild(btn1)
}
