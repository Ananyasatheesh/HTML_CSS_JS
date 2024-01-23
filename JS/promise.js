function isAuthenticated(){
    return Math.random() < 1
}
function Login() {
    return new Promise(
        function(response, noResp){
            setTimeout(function(){
                if (isAuthenticated()){
                    response("Success")
                }
                else {
                    noResp("failure")
                }
            },1000)
        }
    )
}
Login()
    .then(function(msg) {
    console.log(msg);
    })
    .catch(function(msg) {
        console.log(msg)
    })

//OWN EXAMPLE
function amtPaid () {
    amt = Math.ceil(Math.random()*1000) > 1000
    if(amt) {
        return false
    }
    else {
        return true
    }
} //here if amt paid is > 1000 only then it is true else false

function prjSts() {
    return new Promise(function(resolve, reject){
        setTimeout(
        function(){
            if (amtPaid()) {
                resolve("Congrats.! Amt has been paid. We will do your project")
            }
            else{
                reject("Oops..! Correct amt is not paid")
            }
        },1000)
})
} //timeOut is set with function(resolve, reject)
prjSts()
    .then(function(paid) {
        console.log(paid)
    })
    .catch(function(unPaid) {
        console.log(unPaid)
    })