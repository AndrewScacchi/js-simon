// SCRIPT for JS-Simon
console.log("HelloWorld!");
// variables
const btn = document.querySelector(".btn");
const container = document.querySelector(".random-num");
const timer = document.querySelector("div.timer");
const myArray = [];
const maxTime = 5;

// on btn click do..
btn.addEventListener("click", function () {
    // cleanslate
    container.innerHTML = "";
    // created 5 random unique numbers
    while (myArray.length < 5) {
        //createNewDiv
        let num = Math.floor(Math.random() * 100) + 1;
        if (!myArray.includes(num)) {
            myArray.push(num);
        }
    }
    // print the created numbers into the DOM
    for (i = 0; i < myArray.length; i++) {
        const newNum = document.createElement("div");

        newNum.innerHTML = myArray[i];
        newNum.classList.add("number");
        container.append(newNum);
    }

    // CountDOWN 5s
    let timedown = maxTime;
    let countdown = setInterval(function(){
        timer.innerHTML = timedown;
        if (timedown == 0){
            clearInterval(countdown);
            container.innerHTML= "";
        }
        timedown--;
    }, 1000);
   
    // What happens after Times up!
    // nested setTimeOut for memory test
    setTimeout(function(){
        alert("timesUP! Now wait 10s!");
        // nested
        setTimeout(function(){
            let score = 0;
            const answers = [];
    
            for(i=0; i<5; i++){
                let question = parseInt(prompt("Qual'era il " + (i +1) + "^ numero?"));
                if(myArray.includes(question)){
                    score ++;
                    answers.push(`Hai indovinato il ${question}`) ;
                } else {
                    answers.push(`non hai indovinato! era il numero ${myArray[i]}` )}
            }

            // l'alert non è esattamente dinamico
            alert( `Hai indovinato ${score} numeri! 
                    ${answers[0]} 
                    ${answers[1]} 
                    ${answers[2]} 
                    ${answers[3]} 
                    ${answers[4]}`
            );    
        }, 10000)
    },
    6000)
})