let secretnumber=Math.floor(Math.random()*11);
let attempts=3;


document.getElementById("button").onclick=function(){
    attempts=attempts-1;
    let usernumber=document.querySelector("#input1").value;
    document.getElementById("attempts").innerHTML=("Осталось попыток: "+attempts);
    if (usernumber==secretnumber){
        document.querySelector("#answer").innerHTML=("Вы угадали!");
        document.getElementById("input1").disabled = true;
        document.getElementById("button").disabled = true; 
    }
    else if (usernumber>secretnumber){
        document.querySelector("#answer").innerHTML=("Загаданое число меньше");
    }
    
    else if (usernumber<secretnumber){
        document.querySelector("#answer").innerHTML=("Загаданое число больше");
    }
    
    if (attempts==0){
        document.getElementById("button").disabled = true;
        document.querySelector("#answer").innerHTML="Вы проиграли! Загаданое число было: "+secretnumber;
        
    }
    
    document.getElementById("button2").onclick=function(){
        location.reload();
    }
    
    console.log(attempts);
}