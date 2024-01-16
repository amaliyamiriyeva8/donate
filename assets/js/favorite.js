let main=document.querySelector(".main")
fetch("http://localhost:3000/favorite/")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        main.innerHTML+=`
        <div class="main-1">
                    <div class="main-2">
                        <img src=${element.image} alt="">
                        <h1>${element.name}</h1>
                        <h2>${element.des}</h2>
                        <button onclick="deleteBtn(${element.id})">delete</button>
                    </div>
                </div>
        `
    });
})


function deleteBtn(id){
    axios.delete("http://localhost:3000/favorite/"+id)
    window.location.reload()
}