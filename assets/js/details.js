let id=new URLSearchParams(window.location.search).get("id")
let main=document.querySelector(".main")
fetch("http://localhost:3000/donate/"+id)
.then(res=>res.json())
.then(element=>{
    
        main.innerHTML=`
        <div class="main-1">
                    <div class="main-2">
                        <img src=${element.image} alt="">
                        <h1>${element.name}</h1>
                        <h2>${element.des}</h2>
                    </div>
                </div>
        `
    });
