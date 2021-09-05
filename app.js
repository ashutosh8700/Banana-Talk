 var btnTranslate = document.querySelector("#btn-translate"); //to get button
 var txtInput = document.querySelector("#txt-input"); // to get text input
 var outputDiv = document.querySelector("#output"); //to get output
 var serverURL = "https://funtranslations.com/"; // server url

console.log(outputDiv);

 btnTranslate.addEventListener("click", clickEventHandler);

 function getTretanslationURL(input){
     return serverURL + "?" + "text=" + input
 }
 function errorHandler(error){
   console.log("error occured",error)
   alert("something wrong with server try again after some time")
 }

 function clickEventHandler(){ 
   var inputText = txtInput.nodeValue;//tAKING INPUT

   fetch(getTranslationURL(inputText)) // calling server for processing
   .then(response => response.json())
   .then(json => {
     var translatedText = json.contents.translated;
     outputDiv.innerText = translatedText;//output
   })
   .catch(errorHandler)
  }; 