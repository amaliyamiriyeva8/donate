let main=document.querySelector(".main")
let search=document.querySelector("#search")
let sort=document.querySelector("#sort")
let firstArr=[]
let secondArr=[]
let sorted="des"




function CRUD(){
    fetch("http://localhost:3000/donate/")
    .then(res=>res.json())
    .then(data=>{
        secondArr=data
        firstArr=firstArr.length || search.value ? firstArr :data;
        main.innerHTML=""
        axios.get("http://localhost:3000/favorite/")
        .then(favori=>{
            firstArr.forEach(element => {
                if(favori.data.find(favEl=>favEl.id===element.id)){
                    main.innerHTML+=`
                    <div class="main-1">
                                <div class="main-2">
                                    <img src=${element.image} alt="">
                                    <i class="bi bi-heart-fill"  style="color:red" onclick="deleteFav(${element.id})"></i>
                                    <h1>${element.name}</h1>
                                    <h2>${element.des}</h2>
                                    <button onclick="details(${element.id})">details</button>
                                    <button onclick="update(${element.id})">update</button>
                                    <button onclick="deleteBtn(${element.id})">delete</button>
                                </div>
                            </div>
                    `
                }
                else{
                    main.innerHTML+=`
                    <div class="main-1">
                                <div class="main-2">
                                    <img src=${element.image} alt="">
                                    <i class="bi bi-heart" onclick="addfav(${element.id})"></i>
                                    <h1>${element.name}</h1>
                                    <h2>${element.des}</h2>
                                    <button onclick="details(${element.id})">details</button>
                                    <button onclick="update(${element.id})">update</button>
                                    <button onclick="deleteBtn(${element.id})">delete</button>
                                </div>
                            </div>
                    `
                }
              
            });
        })
       
    })
}
CRUD()

search.addEventListener("input",(e)=>{
    firstArr=secondArr
    firstArr=firstArr.filter((element)=>
    element.name.toLocaleLowerCase(element).includes(e.target.value.toLocaleLowerCase())
    )
    CRUD()
})

sort.addEventListener("click",()=>{
    if(sorted==="as"){
        firstArr.sort((a,b)=>a.name.localeCompare(b.name))
        sorted="des"
        sort.innerHTML="SORT AS"
    }
    else  if(sorted==="des"){
        firstArr.sort((a,b)=>b.name.localeCompare(a.name))
        sorted="def"
        sort.innerHTML="SORT DES"
    }
    else{
        firstArr=secondArr
        sorted="as"
        sort.innerHTML="SORT DEF"
    }
    CRUD()
})


function details(id){
    window.location=`details.html?id=${id}`
}

function deleteBtn(id){
    axios.delete("http://localhost:3000/donate/"+id)
    window.location.reload()
}

function update(id){
    window.location=`update.html?id=${id}`
}

let add=document.querySelector("#add")

add.addEventListener("click",()=>{
    window.location="add.html"
})

function deleteFav(id){
    axios.delete(`http://localhost:3000/favorite/${id}`)
}

function addfav(id){
    fetch(`http://localhost:3000/donate/${id}`)
    .then(res=>res.json())
    .then(data=>{
        axios.post(`http://localhost:3000/favorite/`,data)
    })
}

let fav=document.querySelector("#fav")

fav.addEventListener("click",()=>{
    window.location="favorite.html"
})