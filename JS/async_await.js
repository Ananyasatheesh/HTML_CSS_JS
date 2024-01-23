// //Asynchronous function - dummy
// async function asAW() {
//     var promise = new Promise(
//         function(response){
//             setTimeout(function() {
//                 response("Example of asyn and await")
//             }, 1000);
//         }
//     )
//     console.log(await promise)
// }
// asAW()
// //without await resp output will be in pending

//Insta Post
function commented(){
  return true
}
async function comment() {
  return  new Promise(function (commentDone, commentError) {
    setTimeout(function () {
      if(commented()){
      commentDone("First comment");
      }
      else{
        commentError("Sorry error produced while commenting")
      }
    }, 1000);
  });
}
comment()
.then(function(commentDone){
  console.log(commentDone)
})
.catch(function(errComm){
  console.log(errComm)
})

async function like() {
  return new Promise(function (likeResp) {
    setTimeout(function () {
      likeResp("First Like");
    }, 1000);
  });
}

function isLoaded() {
  loadSts = Math.ceil(Math.random()*1000) < 1000
  //console.log(a)
  return loadSts
}

async function post() {
  var abc =  new Promise(function (postResp, postErr) {
    setTimeout(function () {
      if (isLoaded()) {
        postResp("First post is loaded");
      } else {
        postErr("Post is not Loaded");
      }
    }, 1000);
  });
  var [feed,comm,lik]  = await Promise.all([ abc, comment(), like()])
    //console.log(comm)
    //console.log(feed)
    console.log(lik)
  return abc
}
post()
  .then(function (postRe) {
    console.log(postRe);
  })
  .catch(function (errPost) {
    if(!commented){
    console.log(errComm);
    }
  });

// console.log(await post)
// console.log(await like())
// console.log(await comment()) this gives 3sec op as 3 await is used
