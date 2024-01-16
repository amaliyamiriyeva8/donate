let id= new URLSearchParams(window.location.search).get("id")
const form=document.querySelector("form")
const image=document.querySelector("#update-image")
const update_file=document.querySelector("#update-file")
const name=document.querySelector("#name")
const description=document.querySelector("#description")
const input=document.querySelector('input[type="file"]')

fetch("http://localhost:3000/donate/"+id)
.then(res=>res.json())
.then(data=>{
    image.src=data.image
    name.value=data.name
    description.value=data.des
})

input.addEventListener("input",(e)=>{
    let file=e.target.files[0]
    if(file){
        let reader=new FileReader
        reader.readAsDataURL(file)
        reader.onload=()=>{
            image.src=reader.result
        }
    }
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    axios.patch(`http://localhost:3000/donate/`+id,{
    image:image.src,
    name:name.value,
    des:description.value,
    } )
    .then(res=>{
        window.location="index.html?id"
    })
 })
