// SCRIPT for JS-Simon
console.log("HelloWorld!");

/*
Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const btn = document.querySelector(".btn");
const container = document.querySelector(".random-num");
const timer = document.querySelector("div.timer");
const myArray = [];
const maxTime = 5;


btn.addEventListener("click", function () {
    // define array and cleanslate
    container.innerHTML = "";

    //created 5 random unique numbers
    while (myArray.length < 5) {
        //createNewDiv
        let num = Math.floor(Math.random() * 100) + 1;
        if (!myArray.includes(num)) {
            myArray.push(num);
        }
    }


    for (i = 0; i < myArray.length; i++) {
        const newNum = document.createElement("div");

        newNum.innerHTML = myArray[i];
        newNum.classList.add("number");
        container.append(newNum);
    }





    // CountDOWN 30s
    let timedown = maxTime;
    let countdown = setInterval(function(){
        if (timedown == 0){
            clearInterval(countdown);
            alert("timesUP!");
            container.innerHTML = "";
        }

        timer.innerHTML = timedown;
        timedown--;
    }, 1000);
   

    // NON mi fa più nessuna operazione dopo questo punto. e non capisco perchè
    

    console.log(myArray);

})


// FUNCTIONS
// countdown


    




