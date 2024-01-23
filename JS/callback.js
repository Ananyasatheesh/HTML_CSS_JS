function ramuSomu(welcomeMsg, callbackFunc) {
    setTimeout(function(){
        console.log(welcomeMsg)
        callbackFunc()
    },2000) //ramuSomu should execute only 2000ms
}
function miniAni() {
    console.log("Hii")
}

ramuSomu("Hello Ramu and Somu",function(){
    miniAni()
})

//callback is miniAni
//DISADVANTAGE OF CALLBACK - Compulsory 2000ms prgm will run or both prgm won't run

//if callback successful then gives console.log and some msg, 
//if unsucessful that unsuccessful msg should be displayed - done by promising


//OWN EXAMPLE
function student (domain) {
    console.log("Do a project with",domain)
}
function chatGPT (msg, mainCallback) {
    setTimeout( function() {
        console.log(msg)
        mainCallback();
    },1000)
}

chatGPT("What type of Project?", function(){
    student("MERN")
})

//When passing a function as an argument mostly anonymous function is used (without func name)
//NOTE - 2nd code's ouput is seen 1st as it executes after 1sec and 1st code after 2s