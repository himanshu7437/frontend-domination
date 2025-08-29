// create a search bat that displays live search results as users type, updating the result without requiring a full page reload

 const data = [
    {name: "himanshu", src: "https://images.pexels.com/photos/33516862/pexels-photo-33516862.jpeg"},
    {name: "hello", src: "https://images.pexels.com/photos/33516862/pexels-photo-33516862.jpeg"},
    {name: "himanshi", src: "https://images.pexels.com/photos/33516862/pexels-photo-33516862.jpeg"},
    {name: "himu", src: "https://images.pexels.com/photos/33516862/pexels-photo-33516862.jpeg"},
    {name: "hari", src: "https://images.pexels.com/photos/33516862/pexels-photo-33516862.jpeg"},
 ]

 var peopleContainer = document.querySelector(".people");
 var inputt =  document.querySelector("input");

 var prsnss = ""
 data.forEach(function(elem) {
    prsnss += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`
 })
 peopleContainer.innerHTML = prsnss;


inputt.addEventListener("input", function() {
    var matchingData = data.filter(function(e) {
        return e.name.startsWith(inputt.value)
    })

    var  newusers = "";
    matchingData.forEach(function(elem){
        newusers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`
            })            
            
            peopleContainer.innerHTML = newusers;
})