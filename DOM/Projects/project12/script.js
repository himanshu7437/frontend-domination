// create a search bat that siplays live search results as users type, updating the result without requiring a full page reload

 const data = [
    {name: "hiamsnhu", src: "https://images.pexels.com/photos/33516862/pexels-photo-33516862.jpeg"},
    {name: "hello", src: "https://images.pexels.com/photos/33516862/pexels-photo-33516862.jpeg"},
    {name: "hiamsnhu", src: "https://images.pexels.com/photos/33516862/pexels-photo-33516862.jpeg"},
    {name: "hiamsnhu", src: "https://images.pexels.com/photos/33516862/pexels-photo-33516862.jpeg"},
    {name: "hiamsnhu", src: "https://images.pexels.com/photos/33516862/pexels-photo-33516862.jpeg"},
 ]

 var prsnss = ""
 data.forEach(function(elem) {
    prsnss += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`
    document.querySelector(".people").innerHTML = prsnss;

 })

 var inputt =  document.querySelector("input")

inputt.addEventListener("input", function() {
    var matchingData = data.filter(function(e) {
        return e.name.startsWith(inputt.value)
    })

    const {name, src} = matchingData[0]
    matchingData.forEach(function(){
        prsnss += `<div class="person">
                    <div class="img">
                        <img src="${src}" alt="">
                    </div>
                    <h4>${name}</h4>
                </div>`
            })            
            
            document.querySelector(".people").innerHTML = prsnss;
        })